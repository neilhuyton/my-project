// packages/site1/src/router/routes.tsx
import {
  LoginForm,
  Register,
  ResetPasswordForm,
  ConfirmResetPasswordForm,
  WeightForm,
  GoalForm, // Kept for potential future use, but not needed here
} from "@my-project/ui";
import Weight from "../pages/Weight";
import Goals from "../pages/Goals"; // Added import
import {
  createRootRoute,
  createRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { trpcClient } from "../trpc";
import { useAuthStore } from "../store/authStore";
import { jwtDecode } from "jwt-decode";
import type { WeightInput } from "@my-project/api"; // Kept for WeightForm, no Goal types needed here

// Define the shape of the decoded JWT token
interface DecodedToken {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

// Authentication check function
const checkAuth = () => {
  const { isLoggedIn, token } = useAuthStore.getState();
  if (!isLoggedIn || !token) {
    throw redirect({ to: "/login" });
  }
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp < now) {
      return false; // Allow trpcClient to attempt refresh
    }
    return true;
  } catch (error) {
    throw redirect({ to: "/login" });
  }
};

// Define root route without a default component
const rootRoute = createRootRoute({
  errorComponent: (props) => (
    <div>
      An error occurred. Please try again. {JSON.stringify(props.error)}
    </div>
  ),
});

// Define routes
export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    if (!checkAuth()) {
      return; // Allow trpcClient to attempt refresh
    }
  },
  component: () => <div>Weight Dashboard</div>,
});

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();
    return (
      <LoginForm
        loginMutation={async (data) => {
          const result = await trpcClient.login.mutate(data);
          login(result.id, result.token, result.refreshToken);
          return result;
        }}
        onSuccess={() => navigate({ to: "/weight" })}
        onNavigateToResetPassword={() => navigate({ to: "/reset-password" })}
        onNavigateToRegister={() => navigate({ to: "/register" })}
      />
    );
  },
});

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => {
    const navigate = useNavigate();
    return (
      <Register
        registerMutation={(data) => trpcClient.register.mutate(data)}
        onNavigateToLogin={() => navigate({ to: "/login" })}
      />
    );
  },
});

export const resetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reset-password",
  component: () => {
    const navigate = useNavigate();
    return (
      <ResetPasswordForm
        key={Date.now()}
        resetMutation={(data) => trpcClient.resetPassword.request.mutate(data)}
        onNavigateToLogin={() => navigate({ to: "/login" })}
      />
    );
  },
});

export const confirmResetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/confirm-reset-password",
  component: () => {
    const navigate = useNavigate();
    const { token } = confirmResetPasswordRoute.useSearch({
      select: (search: { token?: string }) => ({ token: search.token || "" }),
    });
    if (!token) {
      navigate({ to: "/login" });
      return null;
    }
    return (
      <ConfirmResetPasswordForm
        token={token}
        resetMutation={(data) => trpcClient.resetPassword.confirm.mutate(data)}
        onNavigateToLogin={() => navigate({ to: "/login" })}
      />
    );
  },
});

export const weightRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/weight",
  beforeLoad: () => {
    if (!checkAuth()) {
      return; // Allow trpcClient to attempt refresh
    }
  },
  component: Weight,
});

export const goalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/goals",
  beforeLoad: () => {
    if (!checkAuth()) {
      return; // Allow trpcClient to attempt refresh
    }
  },
  component: Goals, // Use Goals component
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  registerRoute,
  resetPasswordRoute,
  confirmResetPasswordRoute,
  weightRoute,
  goalsRoute,
]);

export { routeTree };
