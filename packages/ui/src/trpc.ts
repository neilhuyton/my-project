import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";
import { httpLink } from "@trpc/client";
import type { AppRouter } from "@my-project/api";

export { type AppRouter } from "@my-project/api";
export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: "http://localhost:8888/.netlify/functions/trpc",
    }),
  ],
});

export const getQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
};
