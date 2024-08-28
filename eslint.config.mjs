import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-n";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";

import * as jlc from "./lib/index.js";

export default [
  pluginJs.configs.recommended,
  ...pluginNode.configs["flat/mixed-esm-and-cjs"],
  eslintPlugin.configs["flat/recommended"],
  // stylistic.configs["recommended-flat"],

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-jlc plugin defined locally
    plugins: { jlc, "@stylistic": stylistic },
    rules: {
      "jlc/kebab-case": "error",

      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
];
