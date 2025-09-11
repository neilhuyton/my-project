// packages/site1/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
  },
  server: {
    proxy: {
      "/trpc": {
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path: string) =>
          path.replace(/^\/trpc/, "/.netlify/functions/trpc"),
      },
    },
  },
  resolve: {
    alias: {
      "@my-project/ui": path.resolve(__dirname, "../ui/dist"),
    },
  },
  logLevel: "info",
});
