// packages/site1/src/main.tsx
import React, { Component, ErrorInfo } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { trpc, queryClient, trpcClient } from "./trpc";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "@my-project/ui/index.css";

// Root component to wrap providers
const Root = ({
  queryClient,
  trpcClient,
}: {
  queryClient: any;
  trpcClient: any;
}) => (
  <QueryClientProvider client={queryClient}>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <RouterProvider router={router} />
    </trpc.Provider>
  </QueryClientProvider>
);

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string | null }
> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p>{this.state.error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Root queryClient={queryClient} trpcClient={trpcClient} />
    </ErrorBoundary>
  </React.StrictMode>
);
