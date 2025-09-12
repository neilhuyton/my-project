// packages/weight/src/trpc.ts
import { initTRPC } from "@trpc/server";
import type { PrismaClient } from "@my-project/site1/prisma/client";

export type Context = {
  prisma: PrismaClient;
  userId?: string;
  email?: string;
};

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
