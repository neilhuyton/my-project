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
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env[`DATABASE_URL_${req.headers["x-site-id"]?.toString().toUpperCase() || "SITE1"}`],
      },
    },
  });

  let userId: string | undefined;
  let email: string | undefined;
  const authHeader = req.headers.authorization;
  const siteId = (req.headers["x-site-id"] as string) || "site1";

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split("Bearer ")[1];
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is not set");
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
        userId: string;
        email: string;
        iat: number;
        exp: number;
      };
      userId = decoded.userId;
      email = decoded.email;
    } catch {
      // Don’t throw; let procedures handle unauthenticated state
    }
  }

  return { prisma, userId, email, siteId };
}