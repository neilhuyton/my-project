import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";

const verifyEmailInputSchema = z.object({
  token: z.string().uuid({ message: "Invalid verification token" }),
});

export const verifyEmailProcedure = publicProcedure
  .input(verifyEmailInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof verifyEmailInputSchema>;
      ctx: Context;
    }) => {
      const { token } = input;

      const user = await ctx.prisma.user.findFirst({
        where: { verificationToken: token },
      });

      if (!user) {
        const existingUser = await ctx.prisma.user.findFirst({
          where: { verificationToken: null, isEmailVerified: true },
          select: { email: true },
        });
        if (existingUser) {
          throw new Error("Email already verified");
        }
        throw new Error("Invalid verification token");
      }

      if (user.isEmailVerified) {
        throw new Error("Email already verified");
      }

      await ctx.prisma.user.update({
        where: { id: user.id },
        data: {
          isEmailVerified: true,
          verificationToken: null,
          updatedAt: new Date(),
        },
      });

      return {
        message: "Email verified successfully!",
      };
    }
  );
