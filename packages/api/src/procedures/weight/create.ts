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

const weightInputSchema = z.object({
  weightKg: twoDecimalPlaces,
  note: z.string().optional(),
});

export const weightCreateProcedure = publicProcedure
  .input(weightInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof weightInputSchema>;
      ctx: Context;
    }) => {
      if (!ctx.userId) {
        throw new Error("Unauthorized: User must be logged in");
      }

      const weight = await ctx.prisma.weightMeasurement.create({
        data: {
          id: crypto.randomUUID(),
          userId: ctx.userId,
          weightKg: Number(input.weightKg.toFixed(2)),
          note: input.note || null,
          createdAt: new Date(),
        },
      });

      // Check if the new weight meets the current goal
      const currentGoal = await ctx.prisma.goal.findFirst({
        where: { userId: ctx.userId, reachedAt: null },
      });

      if (currentGoal) {
        const isGoalReached = input.weightKg <= currentGoal.goalWeightKg;
        if (isGoalReached) {
          await ctx.prisma.goal.update({
            where: { id: currentGoal.id },
            data: { reachedAt: new Date() },
          });
        }
      }

      return {
        id: weight.id,
        userId: weight.userId,
        weightKg: weight.weightKg,
        note: weight.note,
        createdAt: weight.createdAt,
      };
    }
  );
