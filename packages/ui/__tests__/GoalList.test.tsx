// packages/ui/__tests__/GoalList.test.tsx
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
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { server } from "../__mocks__/server";
import { weightGetGoalsHandler } from "../__mocks__/handlers";
import { GoalList } from "../src/components/weight/GoalList";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";

describe("GoalList Component", { timeout: 10000 }, () => {
  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const goalsRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/goals",
      component: () => <GoalList />,
    });
    const loginRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
      component: () => <div data-testid="login-page">Login Page</div>,
    });
    const routeTree = rootRoute.addChildren([goalsRoute, loginRoute]);
    const history = createMemoryHistory({ initialEntries: ["/goals"] });
    const testRouter = createRouter({ routeTree, history });
    return { testRouter };
  };

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });

  beforeEach(() => {
    vi.clearAllMocks();
    server.use(weightGetGoalsHandler);
    localStorage.clear();
  });

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  it("renders loading spinner while fetching goals", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("goal-list-loading")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays goal measurements in a table", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(
          screen.queryByTestId("goal-list-loading")
        ).not.toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByTestId("goal-row-goal-1")).toBeInTheDocument();
        expect(screen.getByTestId("goal-row-goal-2")).toBeInTheDocument();
        expect(screen.getByText("Goal Weight (kg)")).toBeInTheDocument();
        expect(screen.getByText("Set Date")).toBeInTheDocument();
        expect(screen.getByText("Reached Date")).toBeInTheDocument();
        expect(screen.getByText("65.00")).toBeInTheDocument();
        expect(screen.getByText("70.00")).toBeInTheDocument();
        expect(screen.getByText("01/10/2023")).toBeInTheDocument();
        expect(screen.getByText("02/10/2023")).toBeInTheDocument();
        expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays no goals message when goals array is empty", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(
          screen.queryByTestId("goal-list-loading")
        ).not.toBeInTheDocument();
        expect(screen.getByTestId("no-goals-message")).toHaveTextContent(
          "No weight goals found"
        );
        expect(screen.getByRole("table")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays error when fetching goals fails", async () => {
    localStorage.setItem("token", "mock-token-error-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(
          screen.queryByTestId("goal-list-loading")
        ).not.toBeInTheDocument();
        expect(screen.getByTestId("error-message")).toHaveTextContent(
          "Error: Unauthorized: User must be logged in"
        );
      },
      { timeout: 5000, interval: 100 }
    );
  });
});
