import { router, publicProcedure } from './trpc';
import { z } from 'zod';

export const appRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input, ctx }) => {
      return { message: `Hello, ${input.name} from ${ctx.siteId}!` };
    }),
  addUser: publicProcedure
    .input(z.object({ username: z.string() }))
    .mutation(({ input, ctx }) => {
      return { success: true, username: input.username, siteId: ctx.siteId };
    }),
});

export type AppRouter = typeof appRouter;