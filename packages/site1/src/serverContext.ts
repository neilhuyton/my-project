import { PrismaClient } from "../prisma/client";

export const serverContext = {
  prisma: new PrismaClient(),
};
