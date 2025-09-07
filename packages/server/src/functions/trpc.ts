import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../router";

export const handler: Handler = async (
  event: HandlerEvent
): Promise<HandlerResponse> => {
  const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Origin": "http://localhost:5173",
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

  try {
    const path = event.path.replace("/.netlify/functions/trpc", "");
    const queryString = new URLSearchParams(
      (event.queryStringParameters as Record<string, string>) || {}
    ).toString();
    const url = `http://${
      event.headers.host || "localhost:8888"
    }/.netlify/functions/trpc${path ? `/${path}` : ""}${
      queryString ? `?${queryString}` : ""
    }`;
    const headers = event.headers as Record<string, string>;

    const response = await fetchRequestHandler({
      endpoint: "/.netlify/functions/trpc",
      req: new Request(url, {
        method: event.httpMethod,
        headers,
        body: event.httpMethod !== "GET" && event.body ? event.body : undefined,
      }),
      router: appRouter,
      createContext: () => ({
        siteId: Array.isArray(event.headers["x-site-id"])
          ? event.headers["x-site-id"][0]
          : event.headers["x-site-id"] || "unknown",
      }),
    });

    const responseBody = await response.text();

    return {
      statusCode: response.status,
      headers: { ...Object.fromEntries(response.headers), ...corsHeaders },
      body: responseBody,
    };
  } catch (error: any) {
    console.error("tRPC error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
