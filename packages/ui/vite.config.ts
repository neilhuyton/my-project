// packages/ui/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Generate a types entry in package.json
      outDir: "dist", // Changed from outputDir to outDir
      include: ["src/**/*"],
    }),
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
      entry: resolve(__dirname, "src/index.tsx"), // Entry point for the library
      name: "MyProjectUI", // Global name (for UMD builds, if needed)
      fileName: (format) => `index.${format}.js`, // Output file name
      formats: ["es", "cjs"], // Build for ES modules and CommonJS
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
      ], // Externalize dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true, // Generate source maps
    outDir: "dist",
    emptyOutDir: true, // Clean the dist folder before building
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
