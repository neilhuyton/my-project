// eslint.config.js (root)
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Base ignores (covers monorepo packages when linting from root)
  { ignores: ["**/dist", "node_modules"] },

  // Base config for TS/TSX files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      globals: {
        ...globals.es2021,
        ...globals.browser, // Common for UI/site packages
        ...globals.node, // Common for api/server packages
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // Recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended
);