import React from "react";
import ReactDOM from "react-dom/client";
import { LoginForm, Register, formSchema } from "@my-project/ui";
import { trpc, queryClient, trpcClient } from "./trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import "@my-project/ui/index.css";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { z } from "zod";

const rootRoute = createRootRoute();

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => {
    const loginMutation = trpc.login.useMutation({
      onSuccess: (data) => {
        alert(`Login successful! Token: ${data.token}`);
      },
      onError: (error: any) => {
        alert(`Login failed: ${error.message}`);
      },
    });

    const handleLogin = async (data: { email: string; password: string }) => {
      return loginMutation.mutateAsync(data);
    };

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Site1 - Login</h1>
        <LoginForm
          loginMutation={handleLogin}
          onSuccess={() => {}}
          onError={() => {}}
        />
      </div>
    );
  },
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => {
    const registerMutation = trpc.register.useMutation({
      onSuccess: (data) => {
        alert(`Registration successful! Message: ${data.message}`);
      },
      onError: (error: any) => {
        alert(`Registration failed: ${error.message}`);
      },
    });

    const handleRegister = async (data: z.infer<typeof formSchema>) => {
      console.log("site1 registerMutation data:", data); // Debug
      return registerMutation.mutateAsync(data);
    };

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Site1 - Register</h1>
        <Register
          registerMutation={handleRegister}
          onSuccess={() => {}}
          onError={() => {}}
          onNavigateToLogin={() => {
            window.location.href = "/login";
          }}
        />
      </div>
    );
  },
});

const routeTree = rootRoute.addChildren([loginRoute, registerRoute]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <RouterProvider router={router} />
      </trpc.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);