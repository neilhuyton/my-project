// packages/ui/__tests__/GoalForm.test.tsx
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
  weightGetCurrentGoalHandler,
  weightSetGoalHandler,
  weightUpdateGoalHandler,
} from "../__mocks__/handlers";
import { GoalForm } from "../src/components/weight/GoalForm";
import type { GoalInput, GoalResponse, UpdateGoalInput } from "@my-project/api";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { trpcClient } from "../src/trpc";

describe("GoalForm Component", { timeout: 10000 }, () => {
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockOnMutate = vi.fn();
  const mockNavigate = vi.fn();

  const setupRouter = (currentGoal: GoalResponse | null = null) => {
    const rootRoute = createRootRoute();
    const goalRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/goals",
      component: () => (
        <GoalForm
          setGoalMutation={(data: GoalInput) =>
            trpcClient.weight.setGoal.mutate(data) as Promise<GoalResponse>
          }
          updateGoalMutation={(data: UpdateGoalInput) =>
            trpcClient.weight.updateGoal.mutate(data) as Promise<GoalResponse>
          }
          currentGoal={currentGoal}
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
    const routeTree = rootRoute.addChildren([goalRoute, loginRoute]);
    const history = createMemoryHistory({ initialEntries: ["/goals"] });
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
    server.use(
      weightGetCurrentGoalHandler,
      weightSetGoalHandler,
      weightUpdateGoalHandler
    );
    localStorage.clear();
  });

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  it("renders GoalForm with correct content", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-weight-form")).toBeInTheDocument();
        expect(screen.getByTestId("goal-weight-label")).toHaveTextContent(
          "Goal Weight (kg)"
        );
        expect(
          screen.getByPlaceholderText("Enter goal weight in kg")
        ).toBeInTheDocument();
        expect(screen.getByTestId("submit-button")).toHaveTextContent("Set Goal");
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("displays current goal when provided", async () => {
    const currentGoal: GoalResponse = {
      id: "goal-1",
      goalWeightKg: 75,
      goalSetAt: "2025-01-01T00:00:00Z",
      reachedAt: null,
    };
    const { testRouter } = setupRouter(currentGoal);

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("current-goal")).toHaveTextContent(
          `Current Goal: 75 kg (Set on 1/1/2025)`
        );
        expect(screen.getByTestId("submit-button")).toHaveTextContent(
          "Update Goal"
        );
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("successfully submits a goal and calls onSuccess", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("goal-weight-form");
    const weightInput = screen.getByTestId("goal-weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "70.5", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: "new-goal-id",
          goalWeightKg: 70.5,
          goalSetAt: "2025-09-13T00:00:00Z",
          reachedAt: null,
          userId: "empty-user-id",
        });
        expect(mockOnError).not.toHaveBeenCalled();
        expect(screen.getByTestId("goal-error")).toHaveTextContent(
          "Goal set successfully!"
        );
        expect(screen.getByTestId("goal-error")).toHaveClass("text-green-500");
      },
      { timeout: 2000, interval: 100 }
    );
  });

  it("successfully updates a goal and calls onSuccess", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const currentGoal: GoalResponse = {
      id: "goal-1",
      goalWeightKg: 75,
      goalSetAt: "2025-01-01T00:00:00Z",
      reachedAt: null,
    };
    const { testRouter } = setupRouter(currentGoal);

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("goal-weight-form");
    const weightInput = screen.getByTestId("goal-weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "70.5", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: "goal-1",
          goalWeightKg: 70.5,
          goalSetAt: "2025-08-28T00:00:00Z",
          reachedAt: null,
          userId: "test-user-id",
        });
        expect(mockOnError).not.toHaveBeenCalled();
        expect(screen.getByTestId("goal-error")).toHaveTextContent(
          "Goal updated successfully!"
        );
        expect(screen.getByTestId("goal-error")).toHaveClass("text-green-500");
      },
      { timeout: 2000, interval: 100 }
    );
  });

  it("displays error for non-positive goal weight submission", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("goal-weight-form");
    const weightInput = screen.getByTestId("goal-weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "-1", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-error")).toHaveTextContent(
          "Goal weight must be a positive number."
        );
        expect(screen.getByTestId("goal-error")).toHaveClass("text-red-500");
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith(
          "Goal weight must be a positive number."
        );
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("displays error for goal weight with too many decimal places", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("goal-weight-form");
    const weightInput = screen.getByTestId("goal-weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "70.123", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-error")).toHaveTextContent(
          "Goal weight can have up to two decimal places."
        );
        expect(screen.getByTestId("goal-error")).toHaveClass("text-red-500");
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith(
          "Goal weight can have up to two decimal places."
        );
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("clears error message on input change", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("goal-weight-form");
    const weightInput = screen.getByTestId("goal-weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "-1", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-error")).toHaveTextContent(
          "Goal weight must be a positive number."
        );
        expect(screen.getByTestId("goal-error")).toHaveClass("text-red-500");
        expect(mockOnError).toHaveBeenCalledWith(
          "Goal weight must be a positive number."
        );
      },
      { timeout: 1000, interval: 100 }
    );

    await act(async () => {
      await userEvent.clear(weightInput);
      await userEvent.type(weightInput, "70.5", { delay: 10 });
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("goal-error")).toBeNull();
        expect(mockOnError).toHaveBeenCalledTimes(1);
      },
      { timeout: 1000, interval: 100 }
    );
  });

  it("displays unauthorized error and calls onError", async () => {
    localStorage.setItem("token", "mock-token-error-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    const form = screen.getByTestId("goal-weight-form");
    const weightInput = screen.getByTestId("goal-weight-input");

    await act(async () => {
      await userEvent.type(weightInput, "70.5", { delay: 10 });
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith(
          "Unauthorized: Invalid user ID"
        );
        expect(mockOnSuccess).not.toHaveBeenCalled();
        expect(screen.getByTestId("goal-error")).toHaveTextContent(
          "Please log in to set a goal."
        );
        expect(screen.getByTestId("goal-error")).toHaveClass("text-red-500");
      },
      { timeout: 2000, interval: 100 }
    );
  });
});