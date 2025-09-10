import { router, publicProcedure } from "./trpc";
import { z } from "zod";

interface UserEmail {
  email: string;
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

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
    return {
      id: user.id || "mock-id",
      email: input.email,
      token: "mock-token",
      refreshToken: "mock-refresh-token",
    };
  }),
});

export type AppRouter = typeof appRouter;

