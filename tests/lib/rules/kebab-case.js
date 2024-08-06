/**
 * @fileoverview kebab case your file name and directory name.
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/kebab-case"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("kebab-case", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "",
      filename: "a-b.js",
    },
  ],

  invalid: [
    {
      code: "",
      filename: "AB.js",
      errors: [
        {
          message: "Filename 'AB.js' does not match the naming convention.",
          type: null,
        },
      ],
    },
  ],
});
