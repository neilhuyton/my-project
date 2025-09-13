// packages/api/src/router.ts
import { router, publicProcedure } from "./trpc";
import { loginProcedure } from "./procedures/auth/login";
import { registerProcedure } from "./procedures/auth/register";
import { refreshProcedure } from "./procedures/auth/refresh";
import { resetPasswordRouter } from "./procedures/auth/resetPassword";
import { verifyEmailProcedure } from "./procedures/auth/verifyEmail";
import { weightRouter } from "./procedures/weight";
import { sendEmailChangeNotification } from "@my-project/email";
import { z } from "zod";
import type {
  WeightInput,
  WeightResponse,
  GoalInput,
  UpdateGoalInput,
  GoalResponse,
} from "./types";

const emailFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export const apiRouter = router({
  login: loginProcedure,
  register: registerProcedure,
  refresh: refreshProcedure,
  resetPassword: resetPasswordRouter,
  verifyEmail: verifyEmailProcedure,
  weight: weightRouter,
  updateEmail: publicProcedure
    .input(emailFormSchema)
    .mutation(async ({ input, ctx }) => {
      const { email } = input;
      if (!ctx.userId || !ctx.email) {
        throw new Error("Unauthorized: User must be logged in");
      }

      const existingUser = await ctx.prisma.user.findUnique({
        where: { email },
      });
      if (existingUser && existingUser.id !== ctx.userId) {
        throw new Error("Email already in use");
      }

      const oldEmail = ctx.email;
      await ctx.prisma.user.update({
        where: { id: ctx.userId },
        data: { email, updatedAt: new Date() },
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

      const emailResult = await sendEmailChangeNotification(
        oldEmail,
        email,
        emailConfig
      );
      if (!emailResult.success) {
        console.warn(
          `Failed to send email change notification to ${oldEmail}: ${emailResult.error}`
        );
      }

      return { message: "Email updated successfully" };
    }),
});

export type ApiRouter = typeof apiRouter;
export type {
  WeightInput,
  WeightResponse,
  GoalInput,
  UpdateGoalInput,
  GoalResponse,
};
