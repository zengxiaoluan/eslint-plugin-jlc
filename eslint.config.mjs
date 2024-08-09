import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-n";
import eslintPlugin from "eslint-plugin-eslint-plugin";

import * as jlc from "./lib/index.js";

export default [
  pluginJs.configs.recommended,
  ...pluginNode.configs["flat/mixed-esm-and-cjs"],
  eslintPlugin.configs["flat/recommended"],

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { jlc },
    rules: {
      "jlc/kebab-case": "error",
    },
  },
];
