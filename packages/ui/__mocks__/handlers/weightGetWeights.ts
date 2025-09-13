import { http, HttpResponse } from "msw";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  type AuthenticatedUser,
} from "../utils";
import {
  weights,
  noChangeWeights,
  gainWeights,
  singleWeight,
  resetWeights,
} from "./weightsData";

export const weightGetWeightsHandler = http.get(
  "http://localhost:8888/.netlify/functions/trpc/weight.getWeights",
  async ({ request }) => {
    const authResult = authenticateRequest(request, "weight.getWeights");
    if (authResult instanceof HttpResponse) {
      return authResult;
    }
    const { userId } = authResult as AuthenticatedUser;

    if (userId === "error-user-id") {
      return HttpResponse.json(
        {
          id: 0,
          error: {
            message: "Failed to fetch weights",
            code: -32003,
            data: { code: "INTERNAL_SERVER_ERROR", httpStatus: 500, path: "weight.getWeights" },
          },
        },
        { status: 500 }
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

    if (userId === "no-change-user-id") {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: noChangeWeights,
          },
        },
        { status: 200 }
      );
    }

    if (userId === "gain-user-id") {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: gainWeights,
          },
        },
        { status: 200 }
      );
    }

    if (userId === "single-user-id") {
      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: singleWeight,
          },
        },
        { status: 200 }
      );
    }

    return HttpResponse.json(
      {
        id: 0,
        result: {
          type: "data",
          data: weights,
        },
      },
        { status: 200 }
    );
  }
);

export { resetWeights };