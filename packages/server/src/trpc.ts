import { initTRPC } from "@trpc/server";

type Context = {
  siteId: string;
};

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
