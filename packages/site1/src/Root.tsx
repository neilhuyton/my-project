// packages/site1/src/components/Root.tsx
import { Outlet, useLocation } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient, queryClient } from "./trpc";
import { useAuthStore } from "./store/authStore";
import { Navigation } from "@my-project/ui";

const publicRoutes = [
  "/login",
  "/register",
  "/reset-password",
  "/confirm-reset-password",
];

function Root() {
  const authStore = useAuthStore();
  const { isLoggedIn } = authStore || { isLoggedIn: false };
  const location = useLocation();
  const isPublicRoute = publicRoutes.includes(location.pathname);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col">
          {isLoggedIn && !isPublicRoute && (
            <header
              data-testid="header"
              className="sticky top-0 left-0 right-0 z-50 bg-background flex items-center justify-between px-4 py-2"
            >
              <div className="flex items-center gap-2">
                {/* Add ThemeToggle, ColorThemeToggle if implemented */}
              </div>
              {/* Add ProfileIcon if implemented */}
            </header>
          )}
          <main
            className={
              isLoggedIn && !isPublicRoute
                ? "min-h-[calc(100vh-3.5rem)] pb-16"
                : "min-h-screen"
            }
          >
            {isLoggedIn && !isPublicRoute && <Navigation />}
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default Root;
