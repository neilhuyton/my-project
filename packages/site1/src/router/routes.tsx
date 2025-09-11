import { createRoute, redirect, type RootRoute } from "@tanstack/react-router";
import { Register, formSchema } from "@my-project/ui";
import { LoginForm } from "@my-project/ui";
import { useAuthStore } from "../store/authStore";
import { jwtDecode } from "jwt-decode";
import { z } from "zod";
import { trpc } from "../trpc";
import { TRPCClientErrorLike } from "@trpc/client";
import type { AppRouter } from "@my-project/auth";

interface DecodedToken {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

let redirectCount = 0;

const checkAuth = (currentPath: string) => {
  console.log(`checkAuth, attempt ${++redirectCount}, path: ${currentPath}`);
  if (redirectCount > 1) {
    console.error("Redirect loop detected");
    return false;
  }
  if (currentPath === "/login" || currentPath === "/register") {
    console.log("Skipping auth check for login or register");
    return true;
  }
  const { isLoggedIn, token } = useAuthStore.getState();
  console.log("checkAuth state:", { isLoggedIn, token });
  if (!isLoggedIn || !token) {
    throw redirect({ to: "/login" });
  }
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp < now) {
      console.log("Token expired, allowing refresh attempt");
      return false; // Let trpcClient handle refresh
    }
    return true;
  } catch {
    throw redirect({ to: "/login" });
  }
};

export const homeRoute = (rootRoute: RootRoute) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    beforeLoad: ({ location }) => {
      console.log("homeRoute beforeLoad, path:", location.pathname);
      if (!checkAuth(location.pathname)) {
        return; // Allow trpcClient to attempt refresh
      }
    },
    component: () => (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Site1</h1>
        <p>Authenticated content goes here.</p>
      </div>
    ),
  });

export const registerRoute = (rootRoute: RootRoute) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/register",
    component: () => {
      console.log("Rendering register route");
      const registerMutation = trpc.register.useMutation({
        onSuccess: (data) => {
          console.log("Register success:", data);
          alert(`Registration successful! Message: ${data.message}`);
        },
        onError: (error: TRPCClientErrorLike<AppRouter>) => {
          console.error("Register error:", error);
          alert(`Registration failed: ${error.message}`);
        },
      });

      const handleRegister = async (data: z.infer<typeof formSchema>) => {
        console.log("site1 registerMutation data:", data);
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

export const loginRoute = (rootRoute: RootRoute) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: () => {
      console.log("Rendering login route");
      const loginMutation = trpc.login.useMutation({
        onSuccess: (data) => {
          console.log("Login success:", data);
          useAuthStore.getState().login(data.id, data.token, data.refreshToken);
          alert(`Login successful! Token: ${data.token}`);
        },
        onError: (error: TRPCClientErrorLike<AppRouter>) => {
          console.error("Login error:", error);
          alert(`Login failed: ${error.message}`);
        },
      });

      const handleLogin = async (data: z.infer<typeof formSchema>) => {
        console.log("handleLogin data:", data);
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
