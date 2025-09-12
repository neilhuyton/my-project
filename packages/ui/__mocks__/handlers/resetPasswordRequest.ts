import { http, HttpResponse } from "msw";
import { z } from "zod";
import { createTRPCErrorResponse } from "../utils";
import { mockUsers } from "../mockUsers";
import crypto from "crypto";

const resetPasswordInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const resetPasswordRequestHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/resetPassword.request",
  async ({ request }) => {
    const body = await request.json().catch(() => ({}));
    console.log("ResetPassword input:", body);

    const input =
      typeof body === "object" && body !== null && "input" in body
        ? body.input
        : body;

    const result = resetPasswordInputSchema.safeParse(input);
    if (!result.success) {
      console.log("ResetPassword validation error:", result.error.errors);
      return createTRPCErrorResponse(
        0,
        result.error.errors[0].message,
        -32600,
        400,
        "resetPassword.request"
      );
    }

    const { email } = result.data;
    const user = mockUsers.find((u) => u.email === email);

    let resetToken: string | undefined;
    if (user) {
      resetToken = crypto.randomUUID();
      user.resetPasswordToken = resetToken;
      user.resetPasswordTokenExpiresAt = new Date(
        Date.now() + 60 * 60 * 1000
      ).toISOString();
      console.log(
        `Generated reset link for ${email}: http://localhost:5173/confirm-reset-password?token=${resetToken}`
      );
    }

    return HttpResponse.json({
      id: 0,
      result: {
        type: "data",
        data: {
          message: "If the email exists, a reset link has been sent.",
          token: resetToken,
        },
      },
    });
  }
);

export const resetPasswordRequestFailureHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/resetPassword.request",
  () => {
    console.log("Handling resetPassword.request failure");
    return createTRPCErrorResponse(
      0,
      "Failed to send reset email",
      -32600,
      500,
      "resetPassword.request"
    );
  }
);
