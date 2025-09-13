import { http, HttpResponse } from "msw";
import { loginHandler } from "./login";
import { registerHandler } from "./register";
import {
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler,
} from "./resetPasswordRequest";
import { resetPasswordConfirmHandler } from "./resetPasswordConfirm";
import { weightCreateHandler } from "./weightCreate"; // Corrected path
import { weightGetCurrentGoalHandler } from "./weightGetCurrentGoal";

export const debugHandler = http.all("*", () => {
  return HttpResponse.json({ error: "Unhandled request" }, { status: 404 });
});

export const handlers = [
  loginHandler,
  registerHandler,
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler,
  resetPasswordConfirmHandler,
  weightCreateHandler,
  weightGetCurrentGoalHandler,
  debugHandler,
];

export {
  loginHandler,
  registerHandler,
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler,
  resetPasswordConfirmHandler,
  weightCreateHandler,
  weightGetCurrentGoalHandler,
};
