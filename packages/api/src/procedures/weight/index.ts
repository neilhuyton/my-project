import { router } from "../../trpc";
import { weightCreateProcedure } from "./create";
import { weightDeleteProcedure } from "./delete";
import { weightGetWeightsProcedure } from "./getWeights";
import { weightGetGoalsProcedure } from "./getGoals";
import { weightGetCurrentGoalProcedure } from "./getCurrentGoal";
import { weightSetGoalProcedure } from "./setGoal";
import { weightUpdateGoalProcedure } from "./updateGoal";

export const weightRouter = router({
  create: weightCreateProcedure,
  delete: weightDeleteProcedure,
  getWeights: weightGetWeightsProcedure,
  getGoals: weightGetGoalsProcedure,
  getCurrentGoal: weightGetCurrentGoalProcedure,
  setGoal: weightSetGoalProcedure,
  updateGoal: weightUpdateGoalProcedure,
});
