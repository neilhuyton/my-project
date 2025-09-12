import { publicProcedure } from "../../trpc";
import type { Context } from "../../trpc";

export const weightGetCurrentGoalProcedure = publicProcedure.query(
  async ({ ctx }: { ctx: Context }) => {
    if (!ctx.userId) {
      throw new Error("Unauthorized: User must be logged in");
    }

    const goal = await ctx.prisma.goal.findFirst({
      where: { userId: ctx.userId, reachedAt: null },
      orderBy: { goalSetAt: "desc" },
    });

    if (!goal) {
      return null;
    }

    return {
      id: goal.id,
      goalWeightKg: Number(goal.goalWeightKg.toFixed(2)),
      goalSetAt: goal.goalSetAt,
      reachedAt: goal.reachedAt,
    };
  }
);
