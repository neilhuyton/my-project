// packages/ui/__mocks__/handlers/weightGetGoals.ts
import { http, HttpResponse } from "msw";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  type AuthenticatedUser,
} from "../utils";

export const weightGetGoalsHandler = http.get(
  "http://localhost:8888/.netlify/functions/trpc/weight.getGoals",
  async ({ request }) => {
    const authResult = authenticateRequest(request, "weight.getGoals");
    if (authResult instanceof HttpResponse) {
      return authResult;
    }
    const { userId } = authResult as AuthenticatedUser;

    if (userId === "test-user-id") {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: [
              {
                id: "goal-1",
                goalWeightKg: 65,
                goalSetAt: "2023-10-01T00:00:00.000Z",
                reachedAt: null,
                userId: "test-user-id",
              },
              {
                id: "goal-2",
                goalWeightKg: 70,
                goalSetAt: "2023-10-02T00:00:00.000Z",
                reachedAt: null,
                userId: "test-user-id",
              },
            ],
          },
        },
        { status: 200 }
      );
    }

    if (userId === "empty-user-id") {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: [],
          },
        },
        { status: 200 }
      );
    }

    if (userId === "error-user-id") {
      return createTRPCErrorResponse(
        0,
        "Unauthorized: User must be logged in",
        -32001,
        401,
        "weight.getGoals"
      );
    }

    return createTRPCErrorResponse(
      0,
      "Unauthorized: Invalid token",
      -32001,
      401,
      "weight.getGoals"
    );
  }
);
