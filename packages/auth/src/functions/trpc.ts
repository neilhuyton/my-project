import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../router";
import { HandlerEvent } from "@netlify/functions";
import { PrismaClient } from "@my-project/site1/prisma/client";

export const handler = async (event: HandlerEvent) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": event.headers.origin || "http://localhost:5173",
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

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL || "postgresql://postgres:zhljkw-wudfnhu-vwdjlqj-ghy@db.frujfirwqiddeicvtjha.supabase.co:5432/postgres",
      },
    },
  });

  try {
    console.log("DB URL in function:", process.env.DATABASE_URL); // Debug log (server-side)

    const path = event.path.replace(/^\/\.netlify\/functions\/trpc\/?/, "");
    const queryString = event.queryStringParameters
      ? new URLSearchParams(event.queryStringParameters as Record<string, string>).toString()
      : "";
    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(event.headers || {})) {
      headers[key] = Array.isArray(value) ? value.join(",") : value ?? "";
    }
    const url = `http://${headers.host || "localhost:8888"}/trpc${path ? `/${path}` : ""}${
      queryString ? `?${queryString}` : ""
    }`;
    
    const response = await fetchRequestHandler({
      endpoint: "/trpc",
      req: new Request(url, {
        method: event.httpMethod,
        headers,
        body: event.httpMethod !== "GET" && event.body ? event.body : undefined,
      }),
      router: appRouter,
      createContext: () => ({
        siteId: headers["x-site-id"] || "site1",
        prisma, // Pass the instance (non-null)
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