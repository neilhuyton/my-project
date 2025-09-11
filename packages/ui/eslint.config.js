// packages/ui/eslint.config.js
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import globals from "globals";
import { fileURLToPath } from "url";
import path from "path";

// Polyfill __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config(
  // Local ignores for this package's dist
  { ignores: ["dist"] },

  // Global settings (e.g., React version detect)
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // TS-specific config for .ts files (non-React)
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname, // Ensures relative resolution from eslint.config.js
      },
      globals: {
        ...globals.node, // Node-specific globals for tests/mocks
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },

  // React-specific overrides with TS parser for .tsx files
  {
    files: ["**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname, // Ensures relative resolution from eslint.config.js
      },
      globals: {
        ...globals.node, // Node-specific globals if needed
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // Extend with React recommended configs
  ...[react.configs.flat.recommended], // Wrap in array for spread
  react.configs.flat["jsx-runtime"]
);
