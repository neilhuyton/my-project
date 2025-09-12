import { http, HttpResponse } from "msw";
import { loginHandler } from "./login";
import { registerHandler } from "./register";
import { resetPasswordRequestHandler } from "./resetPasswordRequest"; // Add this line

export const debugHandler = http.all("*", () => {
  return HttpResponse.json({ error: "Unhandled request" }, { status: 404 });
});

export const handlers = [
  loginHandler,
  registerHandler,
  resetPasswordRequestHandler,
  debugHandler,
]; // Update this line

export { loginHandler, registerHandler, resetPasswordRequestHandler }; // Update this line
