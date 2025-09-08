import { router, publicProcedure } from "./trpc";

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
});

export type AppRouter = typeof appRouter;
