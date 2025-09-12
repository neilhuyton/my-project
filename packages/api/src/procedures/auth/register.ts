import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "@my-project/email";

const registerInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const registerProcedure = publicProcedure
  .input(registerInputSchema)
  .mutation(async ({ input, ctx }: { input: z.infer<typeof registerInputSchema>, ctx: Context }) => {
    const { email, password } = input;

    const existingUser = await ctx.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomUUID();
    const refreshToken = crypto.randomUUID();

    const user = await ctx.prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        email,
        password: hashedPassword,
        verificationToken,
        refreshToken,
        isEmailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    const emailConfig = {
      appUrl: process.env[`VITE_APP_URL_${ctx.siteId.toUpperCase()}`] || "http://localhost:5173",
      supportEmail: `support@${ctx.siteId}.com`,
      host: process.env.EMAIL_HOST || "smtp.example.com",
      port: parseInt(process.env.EMAIL_PORT || "587", 10),
      user: process.env.EMAIL_USER || "user@example.com",
      pass: process.env.EMAIL_PASS || "password",
      from: process.env.EMAIL_FROM || `no-reply@${ctx.siteId}.com`,
    };

    const emailResult = await sendVerificationEmail(email, verificationToken, emailConfig);
    if (!emailResult.success) {
      throw new Error("Failed to send verification email");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      id: user.id,
      email: user.email,
      token,
      refreshToken,
      message: "Registration successful! Please check your email to verify your account.",
    };
  });