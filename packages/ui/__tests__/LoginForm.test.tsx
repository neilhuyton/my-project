// packages/ui/__tests__/LoginForm.test.tsx
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
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { server } from "../__mocks__/server";
import { loginHandler } from "../__mocks__/handlers";
import LoginForm from "../src/components/LoginForm";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { trpcClient } from "../src/trpc";

vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn((token) => {
    if (
      token ===
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0LXVzZXItMSJ9.dummy-signature"
    ) {
      return { userId: "test-user-1" };
    }
    throw new Error("Invalid token");
  }),
}));

describe("LoginForm Component", () => {
  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const loginRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
      component: () => (
        <LoginForm
          loginMutation={async (data) => {
            const result = await trpcClient.login.mutate(data);
            return result;
          }}
          onSuccess={(data) => history.push("/weight")}
          onNavigateToResetPassword={() => history.push("/reset-password")}
          onNavigateToRegister={() => history.push("/register")}
        />
      ),
    });
    const weightRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/weight",
    });
    const resetPasswordRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/reset-password",
    });
    const registerRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/register",
    });
    const routeTree = rootRoute.addChildren([
      loginRoute,
      weightRoute,
      resetPasswordRoute,
      registerRoute,
    ]);
    const history = createMemoryHistory({ initialEntries: ["/login"] });
    const testRouter = createRouter({ routeTree, history });
    return { history, testRouter };
  };

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
    process.on("unhandledRejection", (reason) => {
      if (
        reason instanceof Error &&
        reason.message.includes("Invalid email or password")
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

  it("handles successful login and redirects to /weight", async () => {
    server.use(loginHandler);
    const { history, testRouter } = setupRouter();
    const mockOnSuccess = vi.fn((data) => {
      history.push("/weight");
    });
    const mockOnError = vi.fn();
    const mockOnMutate = vi.fn();

    renderWithProviders(
      <RouterProvider
        router={testRouter}
        defaultComponent={() => (
          <LoginForm
            loginMutation={async (data) => {
              const result = await trpcClient.login.mutate(data);
              return result;
            }}
            onSuccess={mockOnSuccess}
            onError={mockOnError}
            onMutate={mockOnMutate}
            onNavigateToResetPassword={() => history.push("/reset-password")}
            onNavigateToRegister={() => history.push("/register")}
          />
        )}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("login-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("login-form");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");

    await userEvent.type(emailInput, "testuser@example.com", { delay: 10 });
    await userEvent.type(passwordInput, "password123", { delay: 10 });
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
      },
      { timeout: 1000, interval: 100 }
    );

    await waitFor(
      () => {
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: "test-user-1",
          email: "testuser@example.com",
          token: expect.any(String),
          refreshToken: expect.any(String),
        });
        expect(screen.getByTestId("login-message")).toHaveTextContent(
          "Login successful!"
        );
        expect(screen.getByTestId("login-message")).toHaveClass(
          "text-green-500"
        );
        expect(history.location.pathname).toBe("/weight");
      },
      { timeout: 3000, interval: 100 }
    );
  });

  it("renders login form with email, password inputs, and submit button", async () => {
    const { testRouter } = setupRouter();
    renderWithProviders(<RouterProvider router={testRouter} />);
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Login to your account" })
      ).toBeInTheDocument();
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Sign up" })).toBeInTheDocument();
      expect(screen.getByTestId("forgot-password-link")).toBeInTheDocument();
    });
  });

  it("displays error message on invalid login credentials", async () => {
    server.use(loginHandler);
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const { history, testRouter } = setupRouter();
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();
    const mockOnMutate = vi.fn();

    renderWithProviders(
      <RouterProvider
        router={testRouter}
        defaultComponent={() => (
          <LoginForm
            loginMutation={async (data) => {
              const result = await trpcClient.login.mutate(data);
              return result;
            }}
            onSuccess={mockOnSuccess}
            onError={mockOnError}
            onMutate={mockOnMutate}
            onNavigateToResetPassword={() => history.push("/reset-password")}
            onNavigateToRegister={() => history.push("/register")}
          />
        )}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("login-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("login-form");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    await userEvent.type(emailInput, "wronguser@example.com", { delay: 10 });
    await userEvent.type(passwordInput, "wrongpassword", { delay: 10 });
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        expect(mockOnError).toHaveBeenCalledWith("Invalid email or password");
        expect(screen.getByTestId("login-message")).toHaveTextContent(
          "Login failed: Invalid email or password"
        );
        expect(screen.getByTestId("login-message")).toHaveClass("text-red-500");
      },
      { timeout: 2000, interval: 100 }
    );

    consoleErrorSpy.mockRestore();
  });

  it("displays validation errors for invalid email and password", async () => {
    const { testRouter } = setupRouter();
    renderWithProviders(<RouterProvider router={testRouter} />);
    await waitFor(() => {
      expect(screen.getByTestId("login-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("login-form");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    await userEvent.type(emailInput, "invalid-email", { delay: 10 });
    await userEvent.type(passwordInput, "short", { delay: 10 });
    await userEvent.click(document.body);
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        expect(
          screen.getByText("Please enter a valid email address")
        ).toBeInTheDocument();
        expect(
          screen.getByText("Password must be at least 8 characters long")
        ).toBeInTheDocument();
      },
      { timeout: 2000, interval: 100 }
    );
  });

  it("disables login button during submission", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const { testRouter, history } = setupRouter();
    server.use(loginHandler);
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();
    const mockOnMutate = vi.fn();

    renderWithProviders(
      <RouterProvider
        router={testRouter}
        defaultComponent={() => (
          <LoginForm
            loginMutation={async (data) => {
              const result = await trpcClient.login.mutate(data);
              return result;
            }}
            onSuccess={mockOnSuccess}
            onError={mockOnError}
            onMutate={mockOnMutate}
            onNavigateToResetPassword={() => history.push("/reset-password")}
            onNavigateToRegister={() => history.push("/register")}
          />
        )}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("login-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("login-form");
    const loginButton = screen.getByTestId("login-button");
    expect(loginButton).not.toHaveAttribute("disabled");
    expect(loginButton).toHaveTextContent("Login");

    await userEvent.type(
      screen.getByTestId("email-input"),
      "testuser@example.com",
      { delay: 10 }
    );
    await userEvent.type(screen.getByTestId("password-input"), "password123", {
      delay: 10,
    });
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        expect(loginButton).toHaveAttribute("disabled");
        expect(loginButton).toHaveTextContent("Logging in...");
      },
      { timeout: 2000, interval: 100 }
    );

    await waitFor(
      () => {
        expect(loginButton).not.toHaveAttribute("disabled");
        expect(loginButton).toHaveTextContent("Login");
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: "test-user-1",
          email: "testuser@example.com",
          token: expect.any(String),
          refreshToken: expect.any(String),
        });
      },
      { timeout: 2000, interval: 100 }
    );

    consoleErrorSpy.mockRestore();
  });

  it("displays forgot password link as placeholder and navigates to /reset-password", async () => {
    const { testRouter, history } = setupRouter();
    renderWithProviders(<RouterProvider router={testRouter} />);
    await waitFor(() => {
      expect(screen.getByTestId("forgot-password-link")).toBeInTheDocument();
      expect(screen.getByTestId("forgot-password-link")).toHaveAttribute(
        "href",
        "#"
      );
      expect(screen.getByTestId("forgot-password-link")).toHaveTextContent(
        "Forgot your password?"
      );
    });

    await userEvent.click(screen.getByTestId("forgot-password-link"));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/reset-password");
    });
  });

  it("displays signup link and navigates to /register", async () => {
    const { testRouter, history } = setupRouter();
    renderWithProviders(<RouterProvider router={testRouter} />);
    await waitFor(() => {
      expect(screen.getByTestId("signup-link")).toBeInTheDocument();
      expect(screen.getByTestId("signup-link")).toHaveAttribute("href", "#");
      expect(screen.getByTestId("signup-link")).toHaveTextContent("Sign up");
    });

    await userEvent.click(screen.getByTestId("signup-link"));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/register");
    });
  });
});
