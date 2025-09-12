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
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { server } from "../__mocks__/server";
import {
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler,
} from "../__mocks__/handlers/resetPasswordRequest";
import { ResetPasswordForm } from "../src/components/ResetPasswordForm";
import { formSchema as resetPasswordFormSchema } from "../src/hooks/useResetPassword";
import { z } from "zod";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { mockUsers } from "../__mocks__/mockUsers";
import { trpcClient } from "../src/trpc";

describe("ResetPasswordForm Component", { timeout: 10000 }, () => {
  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const resetPasswordRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/reset-password",
      component: () => (
        <ResetPasswordForm
          resetMutation={(data: z.infer<typeof resetPasswordFormSchema>) =>
            trpcClient.resetPassword.request.mutate(data)
          }
          onSuccess={mockOnSuccess}
          onError={mockOnError}
          onMutate={mockOnMutate}
          onNavigateToLogin={() => testRouter.history.push("/login")}
        />
      ),
    });
    const loginRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
    });
    const routeTree = rootRoute.addChildren([resetPasswordRoute, loginRoute]);
    const history = createMemoryHistory({
      initialEntries: ["/reset-password"],
    });
    const testRouter = createRouter({ routeTree, history });
    return { history, testRouter };
  };

  let mockOnSuccess: ReturnType<typeof vi.fn>;
  let mockOnError: ReturnType<typeof vi.fn>;
  let mockOnMutate: ReturnType<typeof vi.fn>;

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });

  beforeEach(() => {
    localStorage.clear();
    mockUsers.length = 0;
    mockUsers.push({
      id: "user-1",
      email: "testuser@example.com",
      password: "hashedPassword",
      resetPasswordToken: null,
      resetPasswordTokenExpiresAt: null,
      verificationToken: null,
      isEmailVerified: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      refreshToken: null,
    });
    mockOnSuccess = vi.fn();
    mockOnError = vi.fn();
    mockOnMutate = vi.fn();
  });

  afterEach(() => {
    server.resetHandlers();
    localStorage.clear();
    vi.clearAllMocks();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  it("renders reset password form and handles successful submission", async () => {
    server.use(resetPasswordRequestHandler);
    const { history, testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(
      () => {
        expect(screen.getByTestId("reset-password-form")).toBeInTheDocument();
        expect(
          screen.getByRole("heading", { name: "Reset your password" })
        ).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(
          screen.getByRole("button", { name: "Send Reset Link" })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("link", { name: "Back to login" })
        ).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    const form = screen.getByTestId("reset-password-form");
    const emailInput = screen.getByTestId("email-input");

    await userEvent.type(emailInput, "testuser@example.com", { delay: 1 });
    console.log("Dispatching form submit event");
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        console.log("Checking mockOnMutate");
        expect(mockOnMutate).toHaveBeenCalled();
      },
      { timeout: 1000, interval: 100 }
    );

    await waitFor(
      () => {
        console.log("Checking mockOnSuccess and message");
        expect(mockOnSuccess).toHaveBeenCalledWith({
          message: "If the email exists, a reset link has been sent.",
          token: expect.any(String),
        });
        const messageElement = screen.getByTestId("reset-password-message");
        expect(messageElement).toHaveTextContent(
          "If the email exists, a reset link has been sent."
        );
        expect(messageElement).toHaveClass("text-green-500");
      },
      {
        timeout: 2000,
        interval: 100,
        onTimeout: (error: Error) => {
          console.log("waitFor timeout, dumping DOM");
          screen.debug();
          return error;
        },
      }
    );
  });

  it("displays validation error for invalid email", async () => {
    server.use(resetPasswordRequestHandler);
    const { testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(screen.getByTestId("reset-password-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("reset-password-form");
    const emailInput = screen.getByTestId("email-input");

    await userEvent.type(emailInput, "invalid-email", { delay: 1 });
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        expect(
          screen.getByText("Please enter a valid email address")
        ).toBeInTheDocument();
        expect(mockOnMutate).not.toHaveBeenCalled();
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(mockOnError).not.toHaveBeenCalled();
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("displays error for failed email send", async () => {
    server.use(resetPasswordRequestFailureHandler);
    const { testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(screen.getByTestId("reset-password-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("reset-password-form");
    const emailInput = screen.getByTestId("email-input");

    await userEvent.type(emailInput, "testuser@example.com", { delay: 1 });
    await form.dispatchEvent(new Event("submit", { bubbles: true }));

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith("Failed to send reset email");
        expect(screen.getByTestId("reset-password-message")).toHaveTextContent(
          "Failed to send reset link: Failed to send reset email"
        );
        expect(screen.getByTestId("reset-password-message")).toHaveClass(
          "text-red-500"
        );
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("navigates to login when clicking 'Back to login' link", async () => {
    server.use(resetPasswordRequestHandler);
    const { history, testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(screen.getByTestId("reset-password-form")).toBeInTheDocument();
    });

    const backToLoginLink = screen.getByTestId("back-to-login-link");

    await userEvent.click(backToLoginLink);

    await waitFor(
      () => {
        expect(history.location.pathname).toBe("/login");
      },
      { timeout: 1000, interval: 100 }
    );
  });
});
