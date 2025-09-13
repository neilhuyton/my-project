// packages/api/src/router.ts
import { router } from "./trpc";
import { loginProcedure } from "./procedures/auth/login";
import { registerProcedure } from "./procedures/auth/register";
import { refreshProcedure } from "./procedures/auth/refresh";
import { resetPasswordRouter } from "./procedures/auth/resetPassword";
import { verifyEmailProcedure } from "./procedures/auth/verifyEmail";
import { weightRouter } from "./procedures/weight";
import type {
  WeightInput,
  WeightResponse,
  GoalInput,
  UpdateGoalInput,
  GoalResponse,
} from "./types";

export const apiRouter = router({
  login: loginProcedure,
  register: registerProcedure,
  refresh: refreshProcedure,
  resetPassword: resetPasswordRouter,
  verifyEmail: verifyEmailProcedure,
  weight: weightRouter,
});

export type ApiRouter = typeof apiRouter;
export type {
  WeightInput,
  WeightResponse,
  GoalInput,
  UpdateGoalInput,
  GoalResponse,
};
