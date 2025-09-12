import { publicProcedure } from "../../trpc";
import { z } from "zod";
import type { Context } from "../../trpc";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const loginInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const loginProcedure = publicProcedure
  .input(loginInputSchema)
  .mutation(async ({ input, ctx }: { input: z.infer<typeof loginInputSchema>, ctx: Context }) => {
    const { email, password } = input;

    const user = await ctx.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    if (!user.isEmailVerified) {
      throw new Error("Please verify your email before logging in");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = crypto.randomUUID();
    await ctx.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken, updatedAt: new Date() },
    });

    return {
      id: user.id,
      email: user.email,
      token,
      refreshToken,
    };
  });