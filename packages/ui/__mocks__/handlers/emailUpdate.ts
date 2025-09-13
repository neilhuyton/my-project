// packages/ui/__mocks__/handlers/emailUpdate.ts
import { http, HttpResponse } from "msw";
import type {
  EmailFormValues,
  EmailUpdateResponse,
} from "../../src/hooks/useProfile";
import { mockUsers } from "../mockUsers";

export const emailUpdateHandler = http.post(
  "*/.netlify/functions/trpc/updateEmail",
  async ({ request }) => {
    const { email } = (await request.json()) as EmailFormValues;
    const authHeader = request.headers.get("Authorization");
    const siteId = request.headers.get("x-site-id");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return HttpResponse.json(
        {
          error: {
            message: "Unauthorized: User must be logged in",
            code: "UNAUTHORIZED",
            data: { httpStatus: 401 },
          },
        },
        { status: 401 }
      );
    }

    if (siteId !== "site1") {
      return HttpResponse.json(
        {
          error: {
            message: "Invalid site ID",
            code: "BAD_REQUEST",
            data: { httpStatus: 400 },
          },
        },
        { status: 400 }
      );
    }

    const existingUser = mockUsers.find((user) => user.email === email);
    if (existingUser) {
      return HttpResponse.json(
        {
          error: {
            message: "Email already in use",
            code: "CONFLICT",
            data: { httpStatus: 400 },
          },
        },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      result: { data: { message: "Email updated successfully" } },
    });
  }
);
