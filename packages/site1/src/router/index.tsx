import { createRouter, createRootRoute, Outlet } from "@tanstack/react-router";
import { queryClient, trpcClient } from "../trpc";
import { homeRoute, registerRoute, loginRoute } from "./routes";

// Define root route
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Outlet />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-4">
      <h1 className="text-2xl font-bold">An error occurred</h1>
      <p>Please try again. {JSON.stringify(error)}</p>
    </div>
  ),
});

// Create route tree
const routeTree = rootRoute.addChildren([
  homeRoute(rootRoute),
  registerRoute(rootRoute),
  loginRoute(rootRoute),
]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
