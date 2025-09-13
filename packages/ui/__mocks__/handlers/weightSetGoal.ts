// packages/ui/__mocks__/handlers/weightSetGoal.ts
import { http, HttpResponse } from "msw";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  type AuthenticatedUser,
} from "../utils";

export const weightSetGoalHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/weight.setGoal",
  async ({ request }) => {
    const authResult = authenticateRequest(request, "weight.setGoal");
    if (authResult instanceof HttpResponse) {
      return authResult;
    }
    const { userId } = authResult as AuthenticatedUser;
    const body = await request.json();
    const { goalWeightKg } = body as { goalWeightKg: number }; // Updated: Direct destructuring

    if (userId === "empty-user-id" && goalWeightKg > 0) {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: {
              id: "new-goal-id",
              goalWeightKg,
              goalSetAt: "2025-09-13T00:00:00Z",
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
      "Unauthorized: Invalid user ID",
      -32001,
      401,
      "weight.setGoal"
    );
  }
);
