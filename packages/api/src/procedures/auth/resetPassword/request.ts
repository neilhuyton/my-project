import { publicProcedure } from "../../../trpc";
import { z } from "zod";
import type { Context } from "../../../trpc";
import crypto from "crypto";
import { sendResetPasswordEmail } from "@my-project/email";

const resetPasswordRequestInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const resetPasswordRequestProcedure = publicProcedure
  .input(resetPasswordRequestInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof resetPasswordRequestInputSchema>;
      ctx: Context;
    }) => {
      const { email } = input;

      const user = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return { message: "If the email exists, a reset link has been sent." };
      }

      const resetToken = crypto.randomUUID();
      const resetPasswordTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry

      await ctx.prisma.user.update({
        where: { email },
        data: {
          resetPasswordToken: resetToken,
          resetPasswordTokenExpiresAt,
          updatedAt: new Date(),
        },
      });

      const emailConfig = {
        appUrl:
          process.env[`VITE_APP_URL_${ctx.siteId.toUpperCase()}`] ||
          "http://localhost:5173",
        supportEmail: `support@${ctx.siteId}.com`,
        host: process.env.EMAIL_HOST || "smtp.example.com",
        port: parseInt(process.env.EMAIL_PORT || "587", 10),
        user: process.env.EMAIL_USER || "user@example.com",
        pass: process.env.EMAIL_PASS || "password",
        from: process.env.EMAIL_FROM || `no-reply@${ctx.siteId}.com`,
      };

      const emailResult = await sendResetPasswordEmail(
        email,
        resetToken,
        emailConfig
      );
      if (!emailResult.success) {
        throw new Error("Failed to send reset email");
      }

      return { message: "Reset link sent to your email" };
    }
  );
