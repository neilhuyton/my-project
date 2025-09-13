import { http, HttpResponse } from "msw";
import { z } from "zod";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  withBodyParsing,
  type AuthenticatedUser,
} from "../utils";
import { weights } from "./weightsData";

const weightDeleteInputSchema = z.object({
  weightId: z.string().uuid({ message: "Invalid weight ID" }),
});

export const weightDeleteHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/weight.delete",
  withBodyParsing(
    weightDeleteInputSchema,
    "weight.delete",
    async (body, request) => {
      const authResult = authenticateRequest(request, "weight.delete");
      if (authResult instanceof HttpResponse) {
        return authResult;
      }
      const { userId } = authResult as AuthenticatedUser;

      const { weightId } = body;

      if (userId === "error-user-id") {
        return HttpResponse.json(
          {
            id: 0,
            error: {
              message: "Failed to delete weight",
              code: -32003,
              data: {
                code: "INTERNAL_SERVER_ERROR",
                httpStatus: 500,
                path: "weight.delete",
              },
            },
          },
          { status: 500 }
        );
      }

      const weight = weights.find((w) => w.id === weightId);
      if (!weight) {
        return HttpResponse.json(
          {
            id: 0,
            error: {
              message: "Weight measurement not found",
              code: -32602,
              data: {
                code: "NOT_FOUND",
                httpStatus: 404,
                path: "weight.delete",
              },
            },
          },
          { status: 404 }
        );
      }

      if (weight.userId !== userId) {
        return HttpResponse.json(
          {
            id: 0,
            error: {
              message:
                "Unauthorized: Cannot delete another user's weight measurement",
              code: -32001,
              data: {
                code: "UNAUTHORIZED",
                httpStatus: 401,
                path: "weight.delete",
              },
            },
          },
          { status: 401 }
        );
      }

      const weightIndex = weights.findIndex((w) => w.id === weightId);
      weights.splice(weightIndex, 1);

      return HttpResponse.json(
        {
          id: 0,
          result: {
            type: "data",
            data: { id: weightId },
          },
        },
        { status: 200 }
      );
    }
  )
);
