import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
  vi,
} from "vitest";
import { screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { server } from "../__mocks__/server";
import { registerHandler } from "../__mocks__/handlers"; // Updated import
import { Register, formSchema } from "../src/components/Register";
import { z } from "zod";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { trpcClient } from "../src/trpc";

describe("Register Component", () => {
  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const registerRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/register",
      component: () => (
        <Register
          registerMutation={async (data: z.infer<typeof formSchema>) => {
            console.log("Register mutation data:", data); // Debug
            const result = await trpcClient.register.mutate(data);
            return result;
          }}
          onSuccess={() => history.push("/login")}
          onNavigateToLogin={() => history.push("/login")}
        />
      ),
    });
    const loginRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
    });
    const routeTree = rootRoute.addChildren([registerRoute, loginRoute]);
    const history = createMemoryHistory({ initialEntries: ["/register"] });
    const testRouter = createRouter({ routeTree, history });
    return { history, testRouter };
  };

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
    process.on("unhandledRejection", (reason) => {
      if (
        reason instanceof Error &&
        (reason.message.includes("Email already exists") ||
          reason.message.includes("Invalid email address") ||
          reason.message.includes("Password must be at least 8 characters"))
      ) {
        return;
      }
      throw reason;
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    server.resetHandlers();
    localStorage.clear();
    vi.clearAllMocks();
    cleanup();
  });

  afterAll(() => {
    server.close();
    process.removeAllListeners("unhandledRejection");
  });

  it("displays email verification prompt after successful registration", async () => {
    server.use(registerHandler);
    const { history, testRouter } = setupRouter();
    const mockOnSuccess = vi.fn(() => {
      history.push("/login");
    });
    const mockOnError = vi.fn();
    const mockOnMutate = vi.fn();

    renderWithProviders(
      <RouterProvider
        router={testRouter}
        defaultComponent={() => (
          <Register
            registerMutation={async (data: z.infer<typeof formSchema>) => {
              console.log("Register mutation data:", data); // Debug
              const result = await trpcClient.register.mutate(data);
              return result;
            }}
            onSuccess={mockOnSuccess}
            onError={mockOnError}
            onMutate={mockOnMutate}
            onNavigateToLogin={() => history.push("/login")}
          />
        )}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("register-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("register-form");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");

    await act(async () => {
      await userEvent.type(emailInput, "test@example.com", { delay: 10 });
      await userEvent.type(passwordInput, "password123", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
      },
      { timeout: 2000, interval: 100 }
    );

    await waitFor(
      () => {
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: expect.any(String),
          email: "test@example.com",
          message:
            "Registration successful! Please check your email to verify your account.",
        });
        expect(screen.getByTestId("register-message")).toHaveTextContent(
          "Registration successful!"
        );
        expect(screen.getByTestId("register-message")).toHaveClass(
          "text-green-500"
        );
        expect(history.location.pathname).toBe("/login");
      },
      { timeout: 5000, interval: 100 }
    );
  });
});
