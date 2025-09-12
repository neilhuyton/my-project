import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";

const twoDecimalPlaces = z
  .number()
  .positive({ message: "Weight must be a positive number" })
  .refine(
    (val) => {
      const decimalPlaces = val.toString().split(".")[1]?.length || 0;
      return decimalPlaces <= 2;
    },
    { message: "Weight can have up to two decimal places" }
  );

const weightGoalInputSchema = z.object({
  goalId: z.string().uuid({ message: "Invalid goal ID" }),
  goalWeightKg: twoDecimalPlaces,
});

export const weightUpdateGoalProcedure = publicProcedure
  .input(weightGoalInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof weightGoalInputSchema>;
      ctx: Context;
    }) => {
      if (!ctx.userId) {
        throw new Error("Unauthorized: User must be logged in");
      }

      const goal = await ctx.prisma.goal.findUnique({
        where: { id: input.goalId },
      });

      if (!goal) {
        throw new Error("Goal not found");
      }

      if (goal.userId !== ctx.userId) {
        throw new Error("Unauthorized: Cannot edit another user's goal");
      }

      if (goal.reachedAt) {
        throw new Error("Cannot edit a goal that has already been reached");
      }

      const updatedGoal = await ctx.prisma.goal.update({
        where: { id: input.goalId },
        data: { goalWeightKg: Number(input.goalWeightKg.toFixed(2)) },
      });

      return {
        id: updatedGoal.id,
        goalWeightKg: updatedGoal.goalWeightKg,
        goalSetAt: updatedGoal.goalSetAt,
      };
    }
  );
