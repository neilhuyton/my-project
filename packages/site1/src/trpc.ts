import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@my-project/server/src/router";

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_TRPC_URL || "http://localhost:8888/trpc",
      headers: { "x-site-id": "site1" },
      fetch: async (url, options) => {
        console.log("Fetching tRPC:", url, options);
        const response = await fetch(url, options);
        console.log("Response:", response.status, await response.text());
        return response;
      },
    }),
  ],
});
