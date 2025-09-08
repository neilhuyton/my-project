import { initTRPC } from "@trpc/server";
import type { PrismaClient } from "@my-project/site1/prisma/client";

export type Context = {
  siteId: string;
  prisma: PrismaClient;
};

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
