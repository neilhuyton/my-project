// packages/ui/__mocks__/handlers/index.ts
import { http, HttpResponse } from "msw";
import { loginHandler } from "./login";

export const debugHandler = http.all("*", () => {
  return HttpResponse.json({ error: "Unhandled request" }, { status: 404 });
});

export const handlers = [loginHandler, debugHandler];

export { loginHandler };
