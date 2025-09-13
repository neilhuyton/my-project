// packages/ui/__mocks__/handlers/weightGetCurrentGoal.ts
import { http, HttpResponse } from "msw";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  type AuthenticatedUser,
} from "../utils";

export const weightGetCurrentGoalHandler = http.get(
  "http://localhost:8888/.netlify/functions/trpc/weight.getCurrentGoal",
  async ({ request }) => {
    const authResult = authenticateRequest(request, "weight.getCurrentGoal");
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
            data: {
              id: "goal-1",
              goalWeightKg: 65,
              goalSetAt: new Date().toISOString(),
              reachedAt: null,
            },
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
            data: null,
          },
        },
        { status: 200 }
      );
    }

    return createTRPCErrorResponse(
      0,
      "Unauthorized: Invalid user ID",
      -32001,
      401,
      "weight.getCurrentGoal"
    );
  }
);
