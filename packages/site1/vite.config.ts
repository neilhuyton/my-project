import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path: string) =>
          path.replace(/^\/\.netlify\/functions/, "/trpc"),
      },
    },
  },
  resolve: {
    alias: {
      "@my-project/server": path.resolve(__dirname, "../server/src"),
      "@my-project/ui": path.resolve(__dirname, "../ui/dist"),
    },
  },
});
