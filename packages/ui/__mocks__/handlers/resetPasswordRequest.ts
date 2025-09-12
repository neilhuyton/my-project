import { http, HttpResponse } from "msw";
import { z } from "zod";
import { createTRPCErrorResponse } from "../utils";
import { mockUsers } from "../mockUsers";

const resetPasswordInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const resetPasswordRequestHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/resetPassword.request",
  async ({ request }) => {
    let body;
    try {
      const text = await request.text();
      console.log("ResetPassword request body:", text); // Debug
      body = text ? JSON.parse(text) : {};
    } catch {
      return createTRPCErrorResponse(
        0,
        "Failed to parse JSON body",
        -32600,
        400,
        "resetPassword.request"
      );
    }

    const input = body.input ? body.input : body;
    console.log("ResetPassword input:", input); // Debug
    const result = resetPasswordInputSchema.safeParse(input);
    if (!result.success) {
      console.log("ResetPassword validation error:", result.error.errors); // Debug
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          error: {
            message: result.error.errors[0].message,
            code: -32600,
            data: {
              code: "BAD_REQUEST",
              httpStatus: 400,
              path: "resetPassword.request",
            },
          },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { email } = result.data;
    const user = mockUsers.find((u) => u.email === email);

    // Always return a success response to avoid leaking user existence
    return new HttpResponse(
      JSON.stringify({
        id: 0,
        result: {
          type: "data",
          data: {
            message: "If the email exists, a reset link has been sent.",
          },
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
);
