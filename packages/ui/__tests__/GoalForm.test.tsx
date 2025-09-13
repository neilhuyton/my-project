// packages/ui/__tests__/GoalForm.test.tsx
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  vi,
} from "vitest";
import { screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { server } from "../__mocks__/server";
import {
  weightGetCurrentGoalHandler,
  weightSetGoalHandler,
  weightUpdateGoalHandler,
} from "../__mocks__/handlers";
import { GoalForm } from "../src/components/weight/GoalForm";
import { useWeightGoal } from "../src/hooks/useWeightGoal";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";

// Mock LoadingSpinner
vi.mock("../src/components/LoadingSpinner", () => ({
  LoadingSpinner: ({ testId }: { testId: string }) => (
    <div data-testid={testId}>Loading...</div>
  ),
}));

describe("GoalForm Component", { timeout: 10000 }, () => {
  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const WeightGoalComponent = () => {
      const weightGoal = useWeightGoal();
      return <GoalForm weightGoal={weightGoal} />;
    };
    const weightRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/weight",
      component: WeightGoalComponent,
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
    server.use(
      weightGetCurrentGoalHandler,
      weightSetGoalHandler,
      weightUpdateGoalHandler
    );
    localStorage.clear();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("renders loading spinner while fetching goal", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-loading")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays goal form with correct content", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("goal-loading")).not.toBeInTheDocument();
        expect(screen.getByTestId("goal-weight-label")).toHaveTextContent(
          "Goal Weight (kg)"
        );
        expect(screen.getByTestId("goal-weight-input")).toBeInTheDocument();
        expect(screen.getByTestId("submit-button")).toHaveTextContent(
          "Set Goal"
        );
        expect(screen.queryByTestId("goal-message")).not.toBeInTheDocument();
        expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays error when fetching goal fails", async () => {
    localStorage.setItem("token", "mock-token-error-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("goal-loading")).not.toBeInTheDocument();
        expect(screen.getByTestId("error-message")).toHaveTextContent(
          "Error loading goal: Unauthorized: Invalid user ID"
        );
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("submits new goal successfully", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("goal-loading")).not.toBeInTheDocument();
        expect(screen.getByTestId("goal-weight-input")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );

    const form = screen.getByTestId("goal-weight-form");
    await act(async () => {
      await userEvent.type(screen.getByTestId("goal-weight-input"), "65.00");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-message")).toHaveTextContent(
          "Goal set successfully!"
        );
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("updates existing goal successfully", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("goal-loading")).not.toBeInTheDocument();
        expect(screen.getByTestId("goal-weight-input")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );

    const form = screen.getByTestId("goal-weight-form");
    await act(async () => {
      await userEvent.clear(screen.getByTestId("goal-weight-input"));
      await userEvent.type(screen.getByTestId("goal-weight-input"), "70.00");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-message")).toHaveTextContent(
          "Goal updated successfully!"
        );
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays error for invalid goal weight", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId("goal-loading")).not.toBeInTheDocument();
        expect(screen.getByTestId("goal-weight-input")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );

    const form = screen.getByTestId("goal-weight-form");
    await act(async () => {
      await userEvent.type(screen.getByTestId("goal-weight-input"), "-1");
      await form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-message")).toHaveTextContent(
          "Goal weight must be a positive number"
        );
      },
      { timeout: 5000, interval: 100 }
    );
  });
});
