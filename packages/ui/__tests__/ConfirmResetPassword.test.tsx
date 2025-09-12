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
import { resetPasswordConfirmHandler } from "../__mocks__/handlers/resetPasswordConfirm";
import { mockUsers } from "../__mocks__/mockUsers";
import { ConfirmResetPasswordForm } from "../src/components/ConfirmResetPasswordForm";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { trpcClient } from "../src/trpc";

describe("ConfirmResetPasswordForm Component", { timeout: 20000 }, () => {
  const setupRouter = (
    token: string = "123e4567-e89b-12d3-a456-426614174000"
  ) => {
    const rootRoute = createRootRoute();
    const resetPasswordConfirmRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/confirm-reset-password",
      component: () => {
        const { token } = resetPasswordConfirmRoute.useSearch({
          select: (search: { token?: string }) => ({
            token: search.token || "",
          }),
        });
        return (
          <ConfirmResetPasswordForm
            token={token}
            resetMutation={(data) =>
              trpcClient.resetPassword.confirm.mutate(data)
            }
            onSuccess={mockOnSuccess}
            onError={mockOnError}
            onMutate={mockOnMutate}
            onNavigateToLogin={() => testRouter.history.push("/login")}
          />
        );
      },
    });
    const loginRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
      component: () => <div data-testid="login-page">Login Page</div>,
    });
    const routeTree = rootRoute.addChildren([
      resetPasswordConfirmRoute,
      loginRoute,
    ]);
    const history = createMemoryHistory({
      initialEntries: [`/confirm-reset-password?token=${token}`],
    });
    const testRouter = createRouter({ routeTree, history });
    return { history, testRouter };
  };

  let mockOnSuccess: ReturnType<typeof vi.fn>;
  let mockOnError: ReturnType<typeof vi.fn>;
  let mockOnMutate: ReturnType<typeof vi.fn>;

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
    process.on("unhandledRejection", (reason) => {
      if (
        reason instanceof Error &&
        (reason.message.includes("Token and new password are required") ||
          reason.message.includes("Invalid or expired token"))
      ) {
        return;
      }
      throw reason;
    });
  });

  beforeEach(() => {
    localStorage.clear();
    mockUsers.length = 0;
    mockUsers.push({
      id: "user-1",
      email: "testuser@example.com",
      password: "hashedPassword",
      resetPasswordToken: "123e4567-e89b-12d3-a456-426614174000",
      resetPasswordTokenExpiresAt: new Date(
        Date.now() + 60 * 60 * 1000
      ).toISOString(),
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
    process.removeAllListeners("unhandledRejection");
  });

  it("renders reset password confirm form and handles successful submission", async () => {
    server.use(resetPasswordConfirmHandler);
    const { history, testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(
        screen.getByTestId("confirm-reset-password-form")
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: "Reset your password" })
      ).toBeInTheDocument();
      expect(screen.getByLabelText("New Password")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Reset Password" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Back to login" })
      ).toBeInTheDocument();
    });

    const form = screen.getByTestId("confirm-reset-password-form");
    const passwordInput = screen.getByTestId("password-input");

    await act(async () => {
      await userEvent.type(passwordInput, "newSecurePassword123", {
        delay: 10,
      });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
      },
      { timeout: 2000, interval: 50 }
    );

    await waitFor(
      () => {
        expect(mockOnSuccess).toHaveBeenCalledWith({
          message: "Password reset successfully",
        });
        expect(
          screen.getByTestId("confirm-reset-password-message")
        ).toHaveTextContent("Password reset successfully");
        expect(
          screen.getByTestId("confirm-reset-password-message")
        ).toHaveClass("text-green-500");
      },
      { timeout: 5000, interval: 50 }
    );

    await waitFor(
      () => {
        expect(history.location.pathname).toBe("/login");
      },
      { timeout: 2000, interval: 50 }
    );
  });

  it("displays validation error for invalid password", async () => {
    server.use(resetPasswordConfirmHandler);
    const { testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(
        screen.getByTestId("confirm-reset-password-form")
      ).toBeInTheDocument();
    });

    const form = screen.getByTestId("confirm-reset-password-form");
    const passwordInput = screen.getByTestId("password-input");

    await act(async () => {
      await userEvent.type(passwordInput, "short", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(
          screen.getByText("Password must be at least 8 characters")
        ).toBeInTheDocument();
        expect(mockOnMutate).not.toHaveBeenCalled();
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(mockOnError).not.toHaveBeenCalled();
      },
      { timeout: 2000, interval: 50 }
    );
  });

  it("displays error for invalid or expired token", async () => {
    server.use(resetPasswordConfirmHandler);
    const { testRouter } = setupRouter("invalid-token");

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(
        screen.getByTestId("confirm-reset-password-form")
      ).toBeInTheDocument();
    });

    const form = screen.getByTestId("confirm-reset-password-form");
    const passwordInput = screen.getByTestId("password-input");

    await act(async () => {
      await userEvent.type(passwordInput, "newSecurePassword123", {
        delay: 10,
      });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith("Invalid or expired token");
        expect(
          screen.getByTestId("confirm-reset-password-message")
        ).toHaveTextContent(
          "Failed to reset password: Invalid or expired token"
        );
        expect(
          screen.getByTestId("confirm-reset-password-message")
        ).toHaveClass("text-red-500");
      },
      { timeout: 2000, interval: 50 }
    );
  });

  it("navigates to login when clicking 'Back to login' link", async () => {
    server.use(resetPasswordConfirmHandler);
    const { history, testRouter } = setupRouter();

    renderWithProviders(<RouterProvider router={testRouter} />);

    await waitFor(() => {
      expect(
        screen.getByTestId("confirm-reset-password-form")
      ).toBeInTheDocument();
    });

    const backToLoginLink = screen.getByTestId("back-to-login-link");

    await act(async () => {
      await userEvent.click(backToLoginLink);
    });

    await waitFor(
      () => {
        expect(history.location.pathname).toBe("/login");
      },
      { timeout: 2000, interval: 50 }
    );
  });
});
