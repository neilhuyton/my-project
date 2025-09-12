import { publicProcedure } from "../../../trpc";
import { z } from "zod";
import type { Context } from "../../../trpc";
import bcrypt from "bcryptjs";
import { sendPasswordChangeNotification } from "@my-project/email";

const resetPasswordConfirmInputSchema = z.object({
  token: z.string().min(1, { message: "Reset token is required" }),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const resetPasswordConfirmProcedure = publicProcedure
  .input(resetPasswordConfirmInputSchema)
  .mutation(
    async ({
      input,
      ctx,
    }: {
      input: z.infer<typeof resetPasswordConfirmInputSchema>;
      ctx: Context;
    }) => {
      const { token, newPassword } = input;

      const user = await ctx.prisma.user.findFirst({
        where: {
          resetPasswordToken: token,
          resetPasswordTokenExpiresAt: { gt: new Date() },
        },
      });

      if (!user) {
        throw new Error("Invalid or expired token");
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const updatedUser = await ctx.prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
          resetPasswordToken: null,
          resetPasswordTokenExpiresAt: null,
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

      const emailResult = await sendPasswordChangeNotification(
        updatedUser.email,
        emailConfig
      );
      if (!emailResult.success) {
        console.warn(
          `Failed to send password change notification to ${updatedUser.email}: ${emailResult.error}`
        );
      }

      return { message: "Password reset successfully" };
    }
  );
