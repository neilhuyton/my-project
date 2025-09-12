import { router, publicProcedure } from "./trpc";
import { z } from "zod";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import {
  sendVerificationEmail,
  sendResetPasswordEmail,
} from "@my-project/email"; // Add sendResetPasswordEmail

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

interface UserEmail {
  email: string;
}

export const appRouter = router({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    const users: UserEmail[] = await ctx.prisma.user.findMany({
      select: { email: true },
    });
    return users.map((user: UserEmail) => user.email);
  }),

  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    if (!user.isEmailVerified) {
      throw new Error("Please verify your email before logging in");
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    const refreshToken = crypto.randomUUID();
    await ctx.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    return { id: user.id, email: user.email, token, refreshToken };
  }),

  register: publicProcedure
    .input(loginSchema)
    .mutation(async ({ input, ctx }) => {
      const existingUser = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new Error("Email already exists");
      }

      const hashedPassword = await bcrypt.hash(input.password, 10);
      const verificationToken = crypto.randomUUID();
      const user = await ctx.prisma.user.create({
        data: {
          id: crypto.randomUUID(),
          email: input.email,
          password: hashedPassword,
          verificationToken,
          isEmailVerified: false,
          refreshToken: crypto.randomUUID(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      // Construct EmailConfig
      const emailConfig = {
        host: process.env.EMAIL_HOST!,
        port: Number(process.env.EMAIL_PORT),
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
        from: `${process.env.APP_NAME} <${process.env.EMAIL_FROM}>`,
        appUrl:
          process.env[`VITE_APP_URL_${ctx.siteId.toUpperCase()}`] ||
          "http://localhost:5173",
      };

      // Send verification email
      const emailResult = await sendVerificationEmail(
        user.email,
        verificationToken,
        emailConfig
      );

      if (!emailResult.success) {
        console.error("Failed to send verification email:", emailResult.error);
        // Continue registration to avoid blocking the user
      }

      return {
        id: user.id,
        email: user.email,
        message:
          "Registration successful! Please check your email to verify your account.",
      };
    }),

  refresh: publicProcedure
    .input(z.object({ refreshToken: z.string().uuid() }))
    .mutation(async ({ input, ctx }) => {
      const { refreshToken } = input;

      const user = await ctx.prisma.user.findFirst({
        where: { refreshToken },
      });

      if (!user) {
        throw new Error("Invalid refresh token");
      }

      const newAccessToken = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "1h" }
      );

      return {
        token: newAccessToken,
        refreshToken,
      };
    }),

  resetPassword: router({
    request: publicProcedure
      .input(
        z.object({
          email: z.string().email({ message: "Invalid email address" }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const { email } = input;

        const user = await ctx.prisma.user.findUnique({
          where: { email },
        });

        // Always return success to avoid leaking user existence
        if (!user) {
          return {
            message: "If the email exists, a reset link has been sent.",
          };
        }

        const resetToken = crypto.randomUUID();
        const resetTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry

        await ctx.prisma.user.update({
          where: { email },
          data: {
            resetPasswordToken: resetToken,
            resetPasswordTokenExpiresAt: resetTokenExpiresAt,
          },
        });

        // Construct EmailConfig
        const emailConfig = {
          host: process.env.EMAIL_HOST!,
          port: Number(process.env.EMAIL_PORT),
          user: process.env.EMAIL_USER!,
          pass: process.env.EMAIL_PASS!,
          from: `${process.env.APP_NAME} <${process.env.EMAIL_FROM}>`,
          appUrl:
            process.env[`VITE_APP_URL_${ctx.siteId.toUpperCase()}`] ||
            "http://localhost:5173",
        };

        // Send reset email
        const emailResult = await sendResetPasswordEmail(
          email,
          resetToken,
          emailConfig
        );

        if (!emailResult.success) {
          console.error("Failed to send reset email:", emailResult.error);
          // Return success to avoid blocking the user
        }

        return { message: "If the email exists, a reset link has been sent." };
      }),
  }),
});

export type AppRouter = typeof appRouter;
