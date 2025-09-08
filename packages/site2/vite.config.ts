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
        headers: {
          "x-site-id": "site2", // Set to site2
        },
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
