// packages/site1/src/router/index.tsx
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes";

export const router = createRouter({ routeTree });

export type Router = typeof router;
