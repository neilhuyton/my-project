// packages/ui/__mocks__/handlers/login.ts
import { http, HttpResponse } from "msw";
import { z } from "zod";
import { createTRPCErrorResponse } from "../utils";
import { mockUsers, type MockUser } from "../mockUsers";
import bcrypt from "bcryptjs";

const loginInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const loginHandler = http.post(
  "http://localhost:8888/.netlify/functions/trpc/login",
  async ({ request }) => {
    let body;
    try {
      const text = await request.text();
      body = text ? JSON.parse(text) : {};
    } catch (error) {
      return createTRPCErrorResponse(
        0,
        "Failed to parse JSON body",
        -32600,
        400,
        "login"
      );
    }

    // Handle both raw { email, password } and TRPC { input: { email, password } }
    const input = body.input ? body.input : body;
    const result = loginInputSchema.safeParse(input);
    if (!result.success) {
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          error: {
            message: result.error.errors[0].message,
            code: -32600,
            data: { code: "BAD_REQUEST", httpStatus: 400, path: "login" },
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
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return new HttpResponse(
        JSON.stringify({
          id: 0,
          error: {
            message: "Invalid email or password",
            code: -32600,
            data: { code: "BAD_REQUEST", httpStatus: 400, path: "login" },
          },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new HttpResponse(
      JSON.stringify({
        id: 0,
        result: {
          type: "data",
          data: {
            id: user.id,
            email: user.email,
            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0LXVzZXItMSJ9.dummy-signature`,
            refreshToken: "mock-refresh-token",
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
