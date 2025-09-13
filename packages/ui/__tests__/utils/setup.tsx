// packages/ui/__tests__/utils/setup.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { trpc, trpcClient } from "../../src/trpc"; // Use real trpc.ts

export const renderWithProviders = (ui: ReactNode): RenderResult => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        {ui}
      </trpc.Provider>
    </QueryClientProvider>
  );
};
