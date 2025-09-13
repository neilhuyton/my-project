import {
  LoginForm,
  Register,
  ResetPasswordForm,
  ConfirmResetPasswordForm,
  WeightForm,
} from "@my-project/ui";
import {
  createRootRoute,
  createRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { trpcClient } from "../trpc";
import { useAuthStore } from "../store/authStore";
import { jwtDecode } from "jwt-decode";
import type { WeightInput } from "@my-project/api";

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
  console.log("checkAuth - Auth state:", { isLoggedIn, token });
  if (!isLoggedIn || !token) {
    throw redirect({ to: "/login" });
  }
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    console.log("checkAuth - Decoded token:", decoded);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp < now) {
      return false; // Allow trpcClient to attempt refresh
    }
    return true;
  } catch (error) {
    console.error("checkAuth - Token decode failed:", error);
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
          console.log("loginRoute - Login result:", result);
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
  component: () => {
    const navigate = useNavigate();
    const weightMutation = async (data: WeightInput) => {
      console.log("weightRoute - Weight mutation data:", data);
      try {
        const result = await trpcClient.weight.create.mutate(data);
        console.log("weightRoute - Mutation result:", result);
        return result;
      } catch (error: unknown) {
        console.error("weightRoute - Mutation error:", error);
        if (error instanceof Error && error.message.includes("UNAUTHORIZED")) {
          navigate({ to: "/login" });
        }
        throw error;
      }
    };

    return (
      <WeightForm
        weightMutation={weightMutation}
        currentGoal={{
          id: "1",
          goalWeightKg: 65,
          goalSetAt: "2025-09-12T00:00:00Z",
          reachedAt: null,
        }}
        onSuccess={(result) => {
          console.log("weightRoute - Form success:", result);
          // Stay on /weight, no navigation
        }}
        onError={(error) => {
          console.error("weightRoute - Form error:", error);
          if (error === "UNAUTHORIZED") {
            navigate({ to: "/login" });
          }
        }}
      />
    );
  },
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  registerRoute,
  resetPasswordRoute,
  confirmResetPasswordRoute,
  weightRoute,
]);

export { routeTree };
