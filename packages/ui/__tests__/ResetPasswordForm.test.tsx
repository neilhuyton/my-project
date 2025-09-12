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
import { resetPasswordRequestHandler } from "../__mocks__/handlers/resetPasswordRequest";
import { ResetPasswordForm } from "../src/components/ResetPasswordForm"; // Remove formSchema import
import { formSchema as resetPasswordFormSchema } from "../src/hooks/useResetPassword"; // Import from hook
import { z } from "zod";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";

describe("ResetPasswordForm Component", () => {
  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const resetPasswordRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/reset-password",
      component: () => (
        <ResetPasswordForm
          resetMutation={async (
            data: z.infer<typeof resetPasswordFormSchema>
          ) => {
            console.log("ResetPassword mutation data:", data); // Debug
            return Promise.resolve({
              message: "If the email exists, a reset link has been sent.",
            });
          }}
          onNavigateToLogin={() => history.push("/login")}
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

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
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
  });

  it("renders reset password form and handles successful submission", async () => {
    server.use(resetPasswordRequestHandler);
    const { history, testRouter } = setupRouter();
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();
    const mockOnMutate = vi.fn();

    renderWithProviders(
      <RouterProvider
        router={testRouter}
        defaultComponent={() => (
          <ResetPasswordForm
            resetMutation={async (
              data: z.infer<typeof resetPasswordFormSchema>
            ) => {
              console.log("ResetPassword mutation data:", data); // Debug
              return Promise.resolve({
                message: "If the email exists, a reset link has been sent.",
              });
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
    });

    const form = screen.getByTestId("reset-password-form");
    const emailInput = screen.getByTestId("email-input");

    await act(async () => {
      await userEvent.type(emailInput, "testuser@example.com", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledWith({
          message: "If the email exists, a reset link has been sent.",
        });
        expect(screen.getByTestId("reset-password-message")).toHaveTextContent(
          "If the email exists, a reset link has been sent."
        );
        expect(screen.getByTestId("reset-password-message")).toHaveClass(
          "text-green-500"
        );
      },
      { timeout: 2000, interval: 100 }
    );
  });

  it("displays validation error for invalid email", async () => {
    server.use(resetPasswordRequestHandler);
    const { testRouter } = setupRouter();
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();
    const mockOnMutate = vi.fn();

    renderWithProviders(
      <RouterProvider
        router={testRouter}
        defaultComponent={() => (
          <ResetPasswordForm
            resetMutation={async (
              data: z.infer<typeof resetPasswordFormSchema>
            ) => {
              console.log("ResetPassword mutation data:", data); // Debug
              return Promise.resolve({
                message: "If the email exists, a reset link has been sent.",
              });
            }}
            onSuccess={mockOnSuccess}
            onError={mockOnError}
            onMutate={mockOnMutate}
            onNavigateToLogin={() => testRouter.history.push("/login")}
          />
        )}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("reset-password-form")).toBeInTheDocument();
    });

    const form = screen.getByTestId("reset-password-form");
    const emailInput = screen.getByTestId("email-input");

    await act(async () => {
      await userEvent.type(emailInput, "invalid-email", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument();
      expect(mockOnMutate).not.toHaveBeenCalled();
      expect(mockOnSuccess).not.toHaveBeenCalled();
      expect(mockOnError).not.toHaveBeenCalled();
    });
  });
});
