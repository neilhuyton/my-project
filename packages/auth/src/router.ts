// packages/auth/src/router.ts
import { router, publicProcedure } from "./trpc";
import { z } from "zod";
import bcrypt from "bcryptjs"; // Now installed

// Shared Zod schema (reuse in form)
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
  login: publicProcedure
    .input(loginSchema) // Zod validation here
    .mutation(async ({ input, ctx }) => {
      // Find user
      const user = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user) {
        throw new Error("Invalid email or password");
      }

      // Compare hashed password (assume password is hashed in DB)
      const isPasswordValid = await bcrypt.compare(
        input.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("Invalid email or password");
      }

      // Mock tokens (replace with real JWT)
      return {
        id: user.id,
        email: user.email,
        token: "mock-jwt-token-" + user.id,
        refreshToken: "mock-refresh-" + user.id,
      };
    }),
});

export type AppRouter = typeof appRouter;
