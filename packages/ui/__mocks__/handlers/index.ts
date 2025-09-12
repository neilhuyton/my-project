import { http, HttpResponse } from "msw";
import { loginHandler } from "./login";
import { registerHandler } from "./register";
import {
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler, // Add
} from "./resetPasswordRequest";
import { resetPasswordConfirmHandler } from "./resetPasswordConfirm";

export const debugHandler = http.all("*", () => {
  return HttpResponse.json({ error: "Unhandled request" }, { status: 404 });
});

export const handlers = [
  loginHandler,
  registerHandler,
  resetPasswordRequestHandler,
  resetPasswordConfirmHandler,
  debugHandler,
];

export {
  loginHandler,
  registerHandler,
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler, // Add
  resetPasswordConfirmHandler,
};
