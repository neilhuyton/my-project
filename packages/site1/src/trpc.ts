import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@my-project/auth";

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_TRPC_URL || "http://localhost:8888/.netlify/functions/trpc",
      // url: import.meta.env.VITE_TRPC_URL || "http://localhost:8888/trpc",
      // url: import.meta.env.VITE_TRPC_URL || "http://localhost:8888/trpc",
      // url: import.meta.env.VITE_TRPC_URL || "http://localhost:8888/trpc",
      headers: { "x-site-id": "site1" },
      fetch: async (url, options) => {
        console.log("tRPC fetch:", url, options);
        const response = await fetch(url, options);
        const text = await response.text();
        console.log("tRPC response:", text);
        return new Response(text, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      },
    }),
  ],
});
