// packages/auth/eslint.config.js
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Local ignores for this package's dist
  { ignores: ["dist"] },

  // Extended ignores for auth-specific folders
  { ignores: [".netlify/**", "prisma/**"] },

  // Explicit TS parser for Node-only files to fix parsing errors
  {
    files: ["**/*.ts"],
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