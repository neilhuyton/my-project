// packages/ui/__mocks__/handlers/resetPasswordConfirm.ts
import { http, HttpResponse } from "msw";
import { z } from "zod";
import { mockUsers } from "../mockUsers";
import { createTRPCErrorResponse } from "../utils";

const confirmResetPasswordInputSchema = z.object({
  token: z.string().min(1, { message: "Reset token is required" }),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const resetPasswordConfirmHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/resetPassword.confirm",
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
        "resetPassword.confirm"
      );
    }

    const input = body.input ? body.input : body;
    const result = confirmResetPasswordInputSchema.safeParse(input);
    if (!result.success) {
      return createTRPCErrorResponse(
        0,
        result.error.errors[0].message,
        -32600,
        400,
        "resetPassword.confirm"
      );
    }

    const { token, newPassword } = result.data;
    const user = mockUsers.find(
      (u) =>
        u.resetPasswordToken === token &&
        u.resetPasswordTokenExpiresAt &&
        new Date(u.resetPasswordTokenExpiresAt) > new Date()
    );

    if (!user) {
      return createTRPCErrorResponse(
        0,
        "Invalid or expired token",
        -32600,
        400,
        "resetPassword.confirm"
      );
    }

    user.password = newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordTokenExpiresAt = null;

    return new HttpResponse(
      JSON.stringify({
        id: 0,
        result: {
          type: "data",
          data: { message: "Password reset successfully" },
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
);
