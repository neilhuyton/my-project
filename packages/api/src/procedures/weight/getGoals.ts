import { publicProcedure } from "../../trpc";
import type { Context } from "../../trpc";

export const weightGetGoalsProcedure = publicProcedure.query(
  async ({ ctx }: { ctx: Context }) => {
    if (!ctx.userId) {
      throw new Error("Unauthorized: User must be logged in");
    }

    const goals = await ctx.prisma.goal.findMany({
      where: { userId: ctx.userId },
      orderBy: { goalSetAt: "desc" },
    });

    return goals.map((goal) => ({
      ...goal,
      goalWeightKg: Number(goal.goalWeightKg.toFixed(2)),
    }));
  }
);
