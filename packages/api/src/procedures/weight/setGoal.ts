import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";
import crypto from "crypto";

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

const goalInputSchema = z.object({
  goalWeightKg: twoDecimalPlaces,
});

export const weightSetGoalProcedure = publicProcedure
  .input(goalInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof goalInputSchema>;
      ctx: Context;
    }) => {
      if (!ctx.userId) {
        throw new Error("Unauthorized: User must be logged in");
      }

      const currentGoal = await ctx.prisma.goal.findFirst({
        where: { userId: ctx.userId, reachedAt: null },
      });

      if (currentGoal) {
        throw new Error(
          "Cannot set a new goal until the current goal is reached or edited"
        );
      }

      const goal = await ctx.prisma.goal.create({
        data: {
          id: crypto.randomUUID(),
          userId: ctx.userId,
          goalWeightKg: Number(input.goalWeightKg.toFixed(2)),
          goalSetAt: new Date(),
        },
      });

      return {
        id: goal.id,
        goalWeightKg: goal.goalWeightKg,
        goalSetAt: goal.goalSetAt,
        reachedAt: goal.reachedAt,
      };
    }
  );
