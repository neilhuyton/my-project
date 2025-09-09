// packages/ui/vitest.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/components": resolve(__dirname, "./src/components"),
      "@/lib": resolve(__dirname, "./src/lib"),
      "@my-project/auth": resolve(__dirname, "../auth/src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
    env: {
      VITE_TRPC_URL: "http://localhost:8888/.netlify/functions/trpc",
    },
  },
});
