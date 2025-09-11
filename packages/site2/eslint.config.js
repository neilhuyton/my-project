// packages/site2/eslint.config.js
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  // Local ignores for this package's dist
  { ignores: ["dist"] },

  // Extended ignores for site-specific folders
  { ignores: [".netlify/**", "prisma/**"] },

  // Ignore server-only files (not in main tsconfig)
  { ignores: ["src/prisma.ts", "src/serverContext.ts"] },

  // Ignore all .d.ts files (type defs don't need linting)
  { ignores: ["**/*.d.ts"] },

  // Ignore vite.config.ts (outside tsconfig rootDir; lint without project)
  { ignores: ["vite.config.ts"] },

  // TS/TSX config for site files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",  // Enables type-aware linting
      },
      globals: {
        ...globals.node,  // Node-specific globals
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  }
);