// packages/ui/__mocks__/handlers/weightUpdateGoal.ts
import { http, HttpResponse } from "msw";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  type AuthenticatedUser,
} from "../utils";

export const weightUpdateGoalHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/weight.updateGoal",
  async ({ request }) => {
    const authResult = authenticateRequest(request, "weight.updateGoal");
    if (authResult instanceof HttpResponse) {
      return authResult;
    }
    const { userId } = authResult as AuthenticatedUser;
    const body = await request.json();
    const { goalId, goalWeightKg } = body as {
      goalId: string;
      goalWeightKg: number;
    }; // Updated: Direct destructuring

    if (userId === "test-user-id" && goalId === "goal-1" && goalWeightKg > 0) {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: {
              id: goalId,
              goalWeightKg,
              goalSetAt: "2025-08-28T00:00:00Z",
              reachedAt: null,
              userId,
            },
          },
        },
        { status: 200 }
      );
    }

    return createTRPCErrorResponse(
      0,
      "Unauthorized: Invalid user ID or goal ID",
      -32001,
      401,
      "weight.updateGoal"
    );
  }
);
