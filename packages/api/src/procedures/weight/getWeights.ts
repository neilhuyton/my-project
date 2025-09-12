import { publicProcedure } from "../../trpc";
import type { Context } from "../../trpc";

export const weightGetWeightsProcedure = publicProcedure.query(
  async ({ ctx }: { ctx: Context }) => {
    if (!ctx.userId) {
      throw new Error("Unauthorized: User must be logged in");
    }

    const weights = await ctx.prisma.weightMeasurement.findMany({
      where: { userId: ctx.userId },
      orderBy: { createdAt: "desc" },
    });

    return weights.map((weight) => ({
      ...weight,
      weightKg: Number(weight.weightKg.toFixed(2)),
    }));
  }
);
