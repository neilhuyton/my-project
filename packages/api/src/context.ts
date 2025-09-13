// packages/api/src/context.ts
import { PrismaClient } from "../prisma/client";
import jwt from "jsonwebtoken";
import type { IncomingMessage } from "http";

export type Context = {
  prisma: PrismaClient;
  userId?: string;
  email?: string;
  siteId: string;
};

export function createContext({ req }: { req: IncomingMessage }): Context {
  const siteId = (req.headers["x-site-id"] as string) || "site1";
  const dbUrl =
    process.env[`DATABASE_URL_${siteId.toUpperCase()}`] ||
    "postgresql://default:default@localhost:5432/default";

  const prisma = new PrismaClient({
    datasources: { db: { url: dbUrl } },
  });

  let userId: string | undefined;
  let email: string | undefined;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split("Bearer ")[1];
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not set");
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
        userId: string;
        email: string;
        iat: number;
        exp: number;
      };
      userId = decoded.userId;
      email = decoded.email;
    } catch (error) {
      // Silently handle token verification failure
    }
  }

  return { prisma, userId, email, siteId };
}
