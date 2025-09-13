import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { ApiRouter } from "@my-project/api";
import { useAuthStore } from "./store/authStore";

export const trpc = createTRPCReact<ApiRouter>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url:
        import.meta.env.VITE_TRPC_URL ||
        "http://localhost:8888/.netlify/functions/trpc",
      headers: () => {
        const { token } = useAuthStore.getState();
        console.log("trpcClient - Token:", token);
        return {
          "x-site-id": "site1",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };
      },
      async fetch(input, init) {
        console.log("trpcClient - Fetching:", input);
        const response = await fetch(input, init);
        if (response.status === 401) {
          const { refreshToken, userId } = useAuthStore.getState();
          console.log("trpcClient - Attempting token refresh:", {
            userId,
            refreshToken,
          });
          if (refreshToken && userId) {
            try {
              const { token: newToken } = await trpcClient.refresh.mutate({
                refreshToken,
              });
              console.log("trpcClient - New token:", newToken);
              useAuthStore.getState().login(userId, newToken, refreshToken);
              return fetch(input, {
                ...init,
                headers: {
                  ...init?.headers,
                  Authorization: `Bearer ${newToken}`,
                  "x-site-id": "site1",
                },
              });
            } catch (error) {
              console.error("trpcClient - Token refresh failed:", error);
              useAuthStore.getState().logout();
              window.location.href = "/login";
            }
          } else {
            console.log(
              "trpcClient - No refreshToken or userId, redirecting to login"
            );
            useAuthStore.getState().logout();
            window.location.href = "/login";
          }
        }
        return response;
      },
    }),
  ],
});
