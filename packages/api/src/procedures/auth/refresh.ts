import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";
import jwt from "jsonwebtoken";

const refreshInputSchema = z.object({
  refreshToken: z.string().uuid(),
});

export const refreshProcedure = publicProcedure
  .input(refreshInputSchema)
  .mutation(async ({ input, ctx }: { input: z.infer<typeof refreshInputSchema>, ctx: Context }) => {
    const { refreshToken } = input;

    const user = await ctx.prisma.user.findFirst({
      where: { refreshToken },
    });

    if (!user) {
      throw new Error("Invalid refresh token");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const newAccessToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      token: newAccessToken,
      refreshToken,
    };
  });