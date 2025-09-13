// packages/ui/__tests__/EmailUpdateForm.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../__mocks__/server";
import { emailUpdateHandler } from "../__mocks__/handlers";
import { http, HttpResponse } from "msw";
import EmailUpdateForm from "../src/components/EmailUpdateForm";
import { renderWithProviders } from "./utils/setup";
import "@testing-library/jest-dom";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { trpcClient } from "../src/trpc";
import type { EmailFormValues } from "../src/hooks/useProfile";

describe("EmailUpdateForm Component", { timeout: 10000 }, () => {
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockOnMutate = vi.fn();

  const defaultProps = {
    mutationFn: (data: EmailFormValues) => trpcClient.updateEmail.mutate(data),
    onSuccess: mockOnSuccess,
    onError: mockOnError,
    onMutate: mockOnMutate,
  };

  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const profileRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/profile",
      component: () => <EmailUpdateForm {...defaultProps} />,
    });
    const routeTree = rootRoute.addChildren([profileRoute]);
    const history = createMemoryHistory({ initialEntries: ["/profile"] });
    const testRouter = createRouter({ routeTree, history });
    return { testRouter };
  };

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });

  beforeEach(() => {
    vi.clearAllMocks();
    server.use(emailUpdateHandler);
    localStorage.setItem("token", "mock-token-test-user-id");
    localStorage.setItem("siteId", "site1"); // Add siteId to match handler
  });

  afterEach(() => {
    server.resetHandlers();
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });

  it("renders with correct elements and attributes", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(() => {
      expect(screen.getByTestId("email-form")).toBeInTheDocument();
      expect(screen.getByText("Change Email")).toBeInTheDocument();
      expect(screen.getByTestId("mail-icon")).toBeInTheDocument();
      expect(screen.getByTestId("email-input")).toHaveAttribute(
        "placeholder",
        "New email address"
      );
      expect(screen.getByTestId("email-submit")).toHaveTextContent(
        "Update Email"
      );
    });
  });

  it("submits form with valid email", async () => {
    const user = userEvent.setup();
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("email-form");
    const input = screen.getByTestId("email-input");

    await act(async () => {
      await user.type(input, "newemail@example.com");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledWith(
          expect.objectContaining({ message: "Email updated successfully" }),
          expect.anything(),
          expect.anything()
        );
        expect(screen.getByTestId("email-success")).toHaveTextContent(
          "Email updated successfully"
        );
        expect(screen.getByTestId("email-success")).toHaveClass(
          "text-green-500"
        );
      },
      { timeout: 5000 }
    );
  });

  it("displays loading state when pending", async () => {
    server.use(
      http.post("*/.netlify/functions/trpc/updateEmail", async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return HttpResponse.json({
          result: { data: { message: "Email updated successfully" } },
        });
      })
    );

    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("email-form");
    const input = screen.getByTestId("email-input");

    await act(async () => {
      await userEvent.type(input, "newemail@example.com");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("email-loading")).toBeInTheDocument();
        expect(screen.getByTestId("email-submit")).toHaveTextContent(
          "Updating..."
        );
        expect(screen.getByTestId("email-submit")).toBeDisabled();
      },
      { timeout: 1500 }
    );
  });

  it("displays success message", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("email-form");
    const input = screen.getByTestId("email-input");

    await act(async () => {
      await userEvent.type(input, "newemail@example.com");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnSuccess).toHaveBeenCalledWith(
          expect.objectContaining({ message: "Email updated successfully" }),
          expect.anything(),
          expect.anything()
        );
        expect(screen.getByTestId("email-success")).toHaveTextContent(
          "Email updated successfully"
        );
        expect(screen.getByTestId("email-success")).toHaveClass(
          "text-green-500"
        );
      },
      { timeout: 5000 }
    );
  });

  it("displays error message for email already in use", async () => {
    server.use(
      http.post("*/.netlify/functions/trpc/updateEmail", () =>
        HttpResponse.json(
          {
            error: {
              message: "Email already in use",
              code: "CONFLICT",
              data: { httpStatus: 400 },
            },
          },
          { status: 400 }
        )
      )
    );

    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("email-form");
    const input = screen.getByTestId("email-input");

    await act(async () => {
      await userEvent.type(input, "testuser@example.com");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnError).toHaveBeenCalledWith("Email already in use");
        expect(screen.getByTestId("email-error")).toHaveTextContent(
          "Email already in use"
        );
        expect(screen.getByTestId("email-error")).toHaveClass("text-red-500");
      },
      { timeout: 5000 }
    );
  });

  it("displays validation error for invalid email", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("email-form");
    const input = screen.getByTestId("email-input");

    await act(async () => {
      await userEvent.type(input, "invalid-email");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("email-error")).toHaveTextContent(
          "Please enter a valid email address"
        );
        expect(screen.getByTestId("email-error")).toHaveClass("text-red-500");
      },
      { timeout: 5000 }
    );
  });
});
