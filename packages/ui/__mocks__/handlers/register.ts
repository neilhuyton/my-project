import { http, HttpResponse } from "msw";
import { z } from "zod";
import { createTRPCErrorResponse } from "../utils";
import { mockUsers, type MockUser } from "../mockUsers";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const registerInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const registerHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/register",
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
        "register"
      );
    }

    const input = body.input ? body.input : body;
    const result = registerInputSchema.safeParse(input);
    if (!result.success) {
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          error: {
            message: result.error.errors[0].message,
            code: -32600,
            data: { code: "BAD_REQUEST", httpStatus: 400, path: "register" },
          },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { email, password } = result.data;
    const user = mockUsers.find((u: MockUser) => u.email === email);
    if (user) {
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          error: {
            message: "Email already exists",
            code: -32600,
            data: { code: "BAD_REQUEST", httpStatus: 400, path: "register" },
          },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: crypto.randomUUID(),
      email,
      password: hashedPassword,
      verificationToken: crypto.randomUUID(),
      isEmailVerified: false,
      resetPasswordToken: null,
      resetPasswordTokenExpiresAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      refreshToken: crypto.randomUUID(),
    };
    mockUsers.push(newUser);

    return new HttpResponse(
      JSON.stringify({
        id: 0,
        result: {
          type: "data",
          data: {
            id: newUser.id,
            email: newUser.email,
            message:
              "Registration successful! Please check your email to verify your account.",
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
