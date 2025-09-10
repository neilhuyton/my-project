import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../router";
import { HandlerEvent } from "@netlify/functions";
import { PrismaClient } from "../../prisma/client";
import { resolve } from "path";

export const handler = async (event: HandlerEvent) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin":
      event.headers.origin || "http://localhost:5173",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-site-id",
    "Access-Control-Allow-Credentials": "true",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: "",
    };
  }

  const siteId = event.headers["x-site-id"] || "site1";
  const dbUrlEnv = `DATABASE_URL_${siteId.toUpperCase()}`;
  const dbUrl = process.env[dbUrlEnv];

  if (!dbUrl) {
    console.error(`No ${dbUrlEnv} for siteId: ${siteId}`);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        error: `No database configuration for site: ${siteId}`,
      }),
    };
  }

  let prisma: PrismaClient;
  try {
    // Set PRISMA_QUERY_ENGINE_LIBRARY for runtime
    process.env.PRISMA_QUERY_ENGINE_LIBRARY = resolve(
      __dirname,
      "./prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node"
    );
    prisma = new PrismaClient({
      datasources: { db: { url: dbUrl } },
      log: ["query", "info", "warn", "error"],
    });
  } catch (error) {
    console.error("Failed to create PrismaClient:", error);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to initialize database client" }),
    };
  }

  try {
    const path = event.path.replace(/^\/\.netlify\/functions\/trpc\/?/, "");
    const queryString = event.queryStringParameters
      ? new URLSearchParams(
          event.queryStringParameters as Record<string, string>
        ).toString()
      : "";
    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(event.headers || {})) {
      headers[key] = Array.isArray(value) ? value.join(",") : value ?? "";
    }
    const url = `http://${headers.host || "localhost:8888"}/trpc${
      path ? `/${path}` : ""
    }${queryString ? `?${queryString}` : ""}`;

    const response = await fetchRequestHandler({
      endpoint: "/trpc",
      req: new Request(url, {
        method: event.httpMethod,
        headers,
        body: event.httpMethod !== "GET" && event.body ? event.body : undefined,
      }),
      router: appRouter,
      createContext: () => ({
        siteId,
        prisma,
      }),
    });

    const responseBody = await response.text();
    return {
      statusCode: response.status,
      headers: { ...Object.fromEntries(response.headers), ...corsHeaders },
      body: responseBody,
    };
  } catch (error) {
    console.error("tRPC error:", error);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  } finally {
    await prisma.$disconnect();
  }
};