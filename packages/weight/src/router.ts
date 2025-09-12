// packages/weight/src/router.ts
import { z } from "zod";
import { router, publicProcedure } from "./trpc";
import type { Context } from "./trpc";

const weightInputSchema = z.object({
  weightKg: z
    .number()
    .positive({ message: "Weight must be a positive number" }),
  note: z.string().optional(),
});

export const weightRouter = router({
  create: publicProcedure
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

        const { weightKg, note } = input;

        const weight = await ctx.prisma.weightMeasurement.create({
          data: {
            userId: ctx.userId,
            weightKg,
            note,
            createdAt: new Date(),
          },
        });

        return {
          id: weight.id,
          weightKg: weight.weightKg,
          note: weight.note,
          createdAt: weight.createdAt,
        };
      }
    ),
});

export type WeightRouter = typeof weightRouter;
