import {
  LoginForm,
  Register,
  ResetPasswordForm,
  ConfirmResetPasswordForm,
} from "@my-project/ui";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import { trpcClient } from "../trpc";

const rootRoute = createRootRoute();

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <LoginForm
      loginMutation={(data) => {
        console.log("LoginForm mutation called with:", data);
        return trpcClient.login.mutate(data);
      }}
      onSuccess={() => (window.location.href = "/weight")}
      onNavigateToResetPassword={() =>
        (window.location.href = "/reset-password")
      }
      onNavigateToRegister={() => (window.location.href = "/register")}
    />
  ),
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => (
    <Register
      registerMutation={(data) => {
        console.log("Register mutation called with:", data);
        return trpcClient.register.mutate(data);
      }}
      onNavigateToLogin={() => (window.location.href = "/login")}
    />
  ),
});

const resetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reset-password",
  component: () => (
    <ResetPasswordForm
      key={Date.now()} // Force re-render on mount
      resetMutation={(data) => {
        console.log("ResetPasswordForm mutation called with:", data);
        return trpcClient.resetPassword.request.mutate(data);
      }}
      onNavigateToLogin={() => (window.location.href = "/login")}
      onSuccess={(data) => console.log("ResetPasswordForm onSuccess:", data)}
      onError={(error) => console.log("ResetPasswordForm onError:", error)}
      onMutate={() => console.log("ResetPasswordForm onMutate")}
    />
  ),
});

const confirmResetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/confirm-reset-password",
  component: () => {
    const { token } = confirmResetPasswordRoute.useSearch({
      select: (search: { token?: string }) => ({ token: search.token || "" }),
    });
    console.log("ConfirmResetPasswordRoute token from query:", token);
    if (!token) {
      console.log("No token provided in query, redirecting to /login");
      window.location.href = "/login";
      return null;
    }
    return (
      <ConfirmResetPasswordForm
        token={token}
        resetMutation={(data) => {
          console.log("ConfirmResetPasswordForm mutation called with:", data);
          return trpcClient.resetPassword.confirm.mutate(data);
        }}
        onNavigateToLogin={() => (window.location.href = "/login")}
      />
    );
  },
});

const weightRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/weight",
  component: () => <div>Weight Dashboard</div>,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  resetPasswordRoute,
  confirmResetPasswordRoute,
  weightRoute,
]);

export { routeTree };
