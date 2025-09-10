// packages/ui/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src/**/*"],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/components": resolve(__dirname, "./src/components"),
      "@/lib": resolve(__dirname, "./src/lib"),
      "@my-project/auth": resolve(__dirname, "../auth/src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "MyProjectUI",
      fileName: () => `index.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@hookform/resolvers",
        "@my-project/auth",
        "@radix-ui/react-label",
        "@radix-ui/react-slot",
        "@tanstack/react-query",
        "@trpc/client",
        "@trpc/react-query",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "react-hook-form",
        "tailwind-merge",
        "tw-animate-css",
        "zod",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // Rename CSS output to index.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "index.css";
          }
          return assetInfo.name || "[name][extname]";
        },
      },
    },
    cssCodeSplit: false, // Ensure CSS is bundled into a single file
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
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
