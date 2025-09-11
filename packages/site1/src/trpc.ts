import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@my-project/auth";

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

console.log(
  "Initializing tRPC client with URL:",
  import.meta.env.VITE_TRPC_URL ||
    "http://localhost:8888/.netlify/functions/trpc"
);

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url:
        import.meta.env.VITE_TRPC_URL ||
        "http://localhost:8888/.netlify/functions/trpc",
      headers: () => {
        console.log("tRPC headers:", { "x-site-id": "site1" });
        return { "x-site-id": "site1" };
      },
    }),
  ],
});