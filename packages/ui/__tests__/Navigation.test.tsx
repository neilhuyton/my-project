// packages/ui/src/components/__tests__/Navigation.test.tsx
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
} from "vitest";
import { screen, waitFor, act } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import Navigation from "../src/components/Navigation";

describe("Navigation Component", { timeout: 10000 }, () => {
  const setupRouter = (initialPath: string = "/") => {
    const rootRoute = createRootRoute({
      component: () => <Navigation />,
    });
    const weightRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/weight",
      component: () => <div data-testid="weight-page">Weight Page</div>,
    });
    const goalsRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/goals",
      component: () => <div data-testid="goals-page">Goals Page</div>,
    });
    const statsRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/stats",
      component: () => <div data-testid="stats-page">Stats Page</div>,
    });
    const routeTree = rootRoute.addChildren([
      weightRoute,
      goalsRoute,
      statsRoute,
    ]);
    const history = createMemoryHistory({ initialEntries: [initialPath] });
    const testRouter = createRouter({ routeTree, history });
    return { testRouter };
  };

  beforeAll(() => {
    // No setup needed
  });

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    // No cleanup needed
  });

  it("renders navigation links with correct labels and icons", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByText("Weight")).toBeInTheDocument();
        expect(screen.getByText("Goals")).toBeInTheDocument();
        expect(screen.getByText("Stats")).toBeInTheDocument();

        expect(screen.getByLabelText("Navigate to Weight")).toBeInTheDocument();
        expect(screen.getByLabelText("Navigate to Goals")).toBeInTheDocument();
        expect(screen.getByLabelText("Navigate to Stats")).toBeInTheDocument();

        expect(screen.getByTestId("icon-weight")).toBeInTheDocument();
        expect(screen.getByTestId("icon-goals")).toBeInTheDocument();
        expect(screen.getByTestId("icon-stats")).toBeInTheDocument();
      },
      { timeout: 1000, interval: 100 }
    );
  });
});
