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
  console.log("createContext - Called with headers:", {
    authorization: req.headers.authorization,
    siteId: req.headers["x-site-id"],
    allHeaders: req.headers,
  });

  const siteId = (req.headers["x-site-id"] as string) || "site1";
  const dbUrl =
    process.env[`DATABASE_URL_${siteId.toUpperCase()}`] ||
    "postgresql://default:default@localhost:5432/default";

  const prisma = new PrismaClient({
    datasources: { db: { url: dbUrl } },
    log: ["query", "info", "warn", "error"],
  });

  let userId: string | undefined;
  let email: string | undefined;
  const authHeader = req.headers.authorization;

  console.log("createContext - JWT_SECRET exists:", !!process.env.JWT_SECRET);

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split("Bearer ")[1];
    console.log("createContext - Token:", token);
    try {
      if (!process.env.JWT_SECRET) {
        console.error("createContext - JWT_SECRET is not set");
        throw new Error("JWT_SECRET is not set");
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
        userId: string;
        email: string;
        iat: number;
        exp: number;
      };
      console.log("createContext - Decoded token:", decoded);
      userId = decoded.userId;
      email = decoded.email;
    } catch (error) {
      console.error("createContext - Token verification failed:", error);
    }
  } else {
    console.log("createContext - No Bearer token provided");
  }

  return { prisma, userId, email, siteId };
}
