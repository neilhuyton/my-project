import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";

const weightDeleteInputSchema = z.object({
  weightId: z.string().uuid({ message: "Invalid weight ID" }),
});

export const weightDeleteProcedure = publicProcedure
  .input(weightDeleteInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof weightDeleteInputSchema>;
      ctx: Context;
    }) => {
      if (!ctx.userId) {
        throw new Error("Unauthorized: User must be logged in");
      }

      const weight = await ctx.prisma.weightMeasurement.findUnique({
        where: { id: input.weightId },
      });

      if (!weight) {
        throw new Error("Weight measurement not found");
      }

      if (weight.userId !== ctx.userId) {
        throw new Error(
          "Unauthorized: Cannot delete another user's weight measurement"
        );
      }

      await ctx.prisma.weightMeasurement.delete({
        where: { id: input.weightId },
      });

      return { id: input.weightId };
    }
  );
