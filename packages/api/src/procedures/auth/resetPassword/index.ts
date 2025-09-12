import { router } from "../../../trpc";
import { resetPasswordRequestProcedure } from "./request";
import { resetPasswordConfirmProcedure } from "./confirm";

export const resetPasswordRouter = router({
  request: resetPasswordRequestProcedure,
  confirm: resetPasswordConfirmProcedure,
});