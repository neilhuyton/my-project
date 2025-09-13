// packages/ui/__mocks__/handlers/weightCreate.ts
import { http, HttpResponse } from "msw";
import { z } from "zod";
import {
  authenticateRequest,
  createTRPCErrorResponse,
  type AuthenticatedUser,
} from "../utils";

const twoDecimalPlaces = z
  .number()
  .positive({ message: "Weight must be a positive number" })
  .refine(
    (val) => {
      const decimalPlaces = val.toString().split(".")[1]?.length || 0;
      return decimalPlaces <= 2;
    },
    { message: "Weight can have up to two decimal places" }
  );

const weightInputSchema = z.object({
  weightKg: twoDecimalPlaces,
  note: z.string().optional(),
});

export const weightCreateHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/weight.create",
  async ({ request }) => {
    let body;
    try {
      const text = await request.text();
      body = text ? JSON.parse(text) : {};
    } catch {
      return createTRPCErrorResponse(
        0,
        "Failed to parse JSON body",
        -32600,
        400,
        "weight.create"
      );
    }

    const input = body.input ? body.input : body;
    const result = weightInputSchema.safeParse(input);
    if (!result.success) {
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          error: {
            message: result.error.errors[0].message,
            code: -32600,
            data: {
              code: "BAD_REQUEST",
              httpStatus: 400,
              path: "weight.create",
            },
          },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const authResult = authenticateRequest(request, "weight.create");
    if (authResult instanceof HttpResponse) {
      return authResult;
    }
    const { userId } = authResult as AuthenticatedUser;
    const { weightKg, note } = result.data;

    if (userId === "test-user-id" || userId === "empty-user-id") {
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          result: {
            type: "data",
            data: {
              id: "550e8400-e29b-41d4-a716-446655440000",
              userId,
              weightKg: Number(weightKg.toFixed(2)),
              note: note || null,
              createdAt: new Date().toISOString(),
            },
          },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (userId === "error-user-id") {
      return createTRPCErrorResponse(
        0,
        "Failed to create weight",
        -32002,
        500,
        "weight.create"
      );
    }

    return createTRPCErrorResponse(
      0,
      "Unauthorized: Invalid user ID",
      -32001,
      401,
      "weight.create"
    );
  }
);
