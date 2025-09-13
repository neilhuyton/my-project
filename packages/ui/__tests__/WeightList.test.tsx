// packages/ui/__tests__/WeightList.test.tsx
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
  weightGetWeightsHandler,
  weightDeleteHandler,
} from "../__mocks__/handlers";
import { WeightList } from "../src/components/weight/WeightList";
import { trpcClient } from "../src/trpc";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { renderWithProviders } from "./utils/setup";
import { resetWeights } from "../__mocks__/handlers/weightsData";

describe("WeightList Component", { timeout: 10000 }, () => {
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockOnMutate = vi.fn();

  const setupRouter = () => {
    const rootRoute = createRootRoute();
    const weightRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/weight",
      component: () => (
        <WeightList
          deleteWeightMutation={(data) => trpcClient.weight.delete.mutate(data)}
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
    server.use(weightGetWeightsHandler, weightDeleteHandler);
    localStorage.clear();
    resetWeights();
  });

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  it("renders loading spinner while fetching weights", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("weight-list-loading")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays weight measurements in a table", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(
          screen.queryByTestId("weight-list-loading")
        ).not.toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(
          screen.getByTestId("weight-row-550e8400-e29b-41d4-a716-446655440000")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("weight-row-123e4567-e89b-12d3-a456-426614174000")
        ).toBeInTheDocument();
        expect(screen.getByText("70.00")).toBeInTheDocument();
        expect(screen.getByText("69.90")).toBeInTheDocument();
        expect(
          screen.getByTestId(
            "delete-button-550e8400-e29b-41d4-a716-446655440000"
          )
        ).toBeInTheDocument();
        expect(
          screen.getByTestId(
            "delete-button-123e4567-e89b-12d3-a456-426614174000"
          )
        ).toBeInTheDocument();
        expect(screen.getByText("01/10/2023")).toBeInTheDocument();
        expect(screen.getByText("02/10/2023")).toBeInTheDocument();
        expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("deletes a weight measurement when delete button is clicked", async () => {
    localStorage.setItem("token", "mock-token-test-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText("70.00")).toBeInTheDocument();
        expect(screen.getByText("69.90")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );

    const deleteButton = screen.getByTestId(
      "delete-button-550e8400-e29b-41d4-a716-446655440000"
    );
    await act(async () => {
      await userEvent.click(deleteButton);
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnSuccess).toHaveBeenCalledWith({
          id: "550e8400-e29b-41d4-a716-446655440000",
        });
        expect(mockOnError).not.toHaveBeenCalled();
        expect(screen.queryByText("70.00")).not.toBeInTheDocument();
        expect(screen.getByText("69.90")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays unauthorized error when deleting without token", async () => {
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getByText("70.00")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );

    const deleteButton = screen.getByTestId(
      "delete-button-550e8400-e29b-41d4-a716-446655440000"
    );
    await act(async () => {
      await userEvent.click(deleteButton);
    });

    await waitFor(
      () => {
        expect(mockOnMutate).toHaveBeenCalled();
        expect(mockOnError).toHaveBeenCalledWith(
          "Unauthorized: User must be logged in"
        );
        expect(screen.getByTestId("error-message")).toHaveTextContent(
          "Error: Unauthorized: User must be logged in"
        );
        expect(mockOnSuccess).not.toHaveBeenCalled();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays no weights message when weights array is empty", async () => {
    localStorage.setItem("token", "mock-token-empty-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(
          screen.queryByTestId("weight-list-loading")
        ).not.toBeInTheDocument();
        expect(screen.getByTestId("no-weights-message")).toHaveTextContent(
          "No weight measurements found"
        );
        expect(screen.getByRole("table")).toBeInTheDocument();
      },
      { timeout: 5000, interval: 100 }
    );
  });

  it("displays error when fetching weights fails", async () => {
    localStorage.setItem("token", "mock-token-error-user-id");
    const { testRouter } = setupRouter();

    await act(async () => {
      renderWithProviders(<RouterProvider router={testRouter} />);
    });

    await waitFor(
      () => {
        expect(
          screen.queryByTestId("weight-list-loading")
        ).not.toBeInTheDocument();
        expect(screen.getByTestId("error-message")).toHaveTextContent(
          "Error: Failed to fetch weights"
        );
      },
      { timeout: 5000, interval: 100 }
    );
  });
});
