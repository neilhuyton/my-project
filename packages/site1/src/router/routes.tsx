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
      loginMutation={(data) => trpcClient.login.mutate(data)}
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
      registerMutation={(data) => trpcClient.register.mutate(data)}
      onNavigateToLogin={() => (window.location.href = "/login")}
    />
  ),
});

const resetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reset-password",
  component: () => (
    <ResetPasswordForm
      key={Date.now()}
      resetMutation={(data) => trpcClient.resetPassword.request.mutate(data)}
      onNavigateToLogin={() => (window.location.href = "/login")}
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
    if (!token) {
      window.location.href = "/login";
      return null;
    }
    return (
      <ConfirmResetPasswordForm
        token={token}
        resetMutation={(data) => trpcClient.resetPassword.confirm.mutate(data)}
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
