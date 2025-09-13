// packages/ui/__mocks__/handlers/index.ts
import { http, HttpResponse } from "msw";
import { loginHandler } from "./login";
import { registerHandler } from "./register";
import {
  resetPasswordRequestHandler,
  resetPasswordRequestFailureHandler,
} from "./resetPasswordRequest";
import { resetPasswordConfirmHandler } from "./resetPasswordConfirm";
import { weightCreateHandler } from "./weightCreate";
import { weightGetCurrentGoalHandler } from "./weightGetCurrentGoal";
import { weightGetWeightsHandler } from "./weightGetWeights";
import { weightDeleteHandler } from "./weightDelete";
import { weightSetGoalHandler } from "./weightSetGoal";
import { weightUpdateGoalHandler } from "./weightUpdateGoal";

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
  weightGetWeightsHandler,
  weightDeleteHandler,
  weightSetGoalHandler,
  weightUpdateGoalHandler,
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
  weightGetWeightsHandler,
  weightDeleteHandler,
  weightSetGoalHandler,
  weightUpdateGoalHandler,
};
