// packages/ui/__tests__/WeightForm.test.tsx
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
import {
  weightCreateHandler,
  weightGetCurrentGoalHandler,
} from "../__mocks__/handlers";
import { WeightForm } from "../src/components/weight/WeightForm";
import type { WeightInput, GoalResponse } from "@my-project/api";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { trpcClient } from "../src/trpc";

describe("WeightForm Component", { timeout: 10000 }, () => {
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockOnMutate = vi.fn();
  const mockNavigate = vi.fn();

  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const weightRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/weight",
      component: () => (
        <WeightForm
          weightMutation={(data: WeightInput) =>
            trpcClient.weight.create.mutate(data)
          }
          currentGoal={{
            id: "goal-1",
            goalWeightKg: 65,
            goalSetAt: "2025-09-12T00:00:00Z",
            reachedAt: null,
          }}
          onSuccess={mockOnSuccess}
          onError={mockOnError}
          onMutate={mockOnMutate}
        />
      ),
    });
    const loginRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
      component: () => <div data-testid="login-page">Login Page</div>,
    });
    const routeTree = rootRoute.addChildren([weightRoute, loginRoute]);
    const history = createMemoryHistory({ initialEntries: ["/weight"] });
    const testRouter = createRouter({ routeTree, history });
    return { history, testRouter };
  };

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(require("@tanstack/react-router"), "useNavigate").mockReturnValue(
      mockNavigate
    );
    server.use(weightCreateHandler, weightGetCurrentGoalHandler);
    localStorage.clear();
  });

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  it("renders WeightForm with correct content", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("weight-form")).toBeInTheDocument();
        expect(screen.getByTestId("weight-label")).toHaveTextContent(
          "Weight (kg)"
        );
        expect(
          screen.getByPlaceholderText("Enter weight in kg")
        ).toBeInTheDocument();
        expect(screen.getByTestId("note-label")).toHaveTextContent(
          "Note (optional)"
        );
        expect(screen.getByPlaceholderText("Add a note")).toBeInTheDocument();
        expect(screen.getByTestId("current-goal")).toHaveTextContent(
          /Current Goal: 65 kg/
        );
        expect(screen.getByTestId("submit-button")).toHaveTextContent(
          "Submit Weight"
        );
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("successfully submits a weight measurement and calls onSuccess", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");

    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("weight-form");
    const weightInput = screen.getByTestId("weight-input");
    const noteInput = screen.getByTestId("note-input");

    await act(async () => {
      await userEvent.type(weightInput, "70", { delay: 10 });
      await userEvent.type(noteInput, "Test note", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: "550e8400-e29b-41d4-a716-446655440000",
          userId: "test-user-id",
          weightKg: 70,
          note: "Test note",
          createdAt: expect.any(String),
        });
        expect(mockOnError).not.toHaveBeenCalled();
        expect(screen.getByTestId("weight-error")).toHaveTextContent(
          "Weight recorded successfully!"
        );
      },
      { timeout: 2000, interval: 100 }
    );
  });

  it("displays error for negative weight submission", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("weight-form");
    const weightInput = screen.getByTestId("weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "-1", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("weight-error")).toHaveTextContent(
          "Please enter a valid weight."
        );
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(mockOnError).not.toHaveBeenCalled();
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("displays error for weight with too many decimal places", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("weight-form");
    const weightInput = screen.getByTestId("weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "70.1234", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("weight-error")).toHaveTextContent(
          "Weight can have up to two decimal places."
        );
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(mockOnError).not.toHaveBeenCalled();
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("clears error message on input change", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("weight-form");
    const weightInput = screen.getByTestId("weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "-1", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("weight-error")).toHaveTextContent(
          "Please enter a valid weight."
        );
      },
      { timeout: 1000, interval: 100 }
    );

    await act(async () => {
      await userEvent.clear(weightInput);
      await userEvent.type(weightInput, "70", { delay: 10 });
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("weight-error")).toBeNull();
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("displays unauthorized error and calls onError", async () => {
    server.use(weightCreateHandler);

    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("weight-form");
    const weightInput = screen.getByTestId("weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "70", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith(
          "Unauthorized: User must be logged in"
        );
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(screen.getByTestId("weight-error")).toHaveTextContent(
          "Please log in to record a weight."
        );
      },
      { timeout: 2000, interval: 100 }
    );
  });
});
