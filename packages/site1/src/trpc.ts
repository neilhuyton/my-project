import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@my-project/auth";

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_TRPC_URL || "/trpc",
      headers: { "x-site-id": "site1" },
      fetch: async (url, options) => {
        console.log("Fetching tRPC:", url, options);
        const response = await fetch(url, options);
        // Clone the response to preserve the body for tRPC
        const clonedResponse = response.clone();
        console.log("Response:", response.status, await clonedResponse.text());
        return response;
      },
    }),
  ],
});