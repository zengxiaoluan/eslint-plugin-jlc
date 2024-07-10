/**
 * @fileoverview notation need spaces
 * @author zeng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/comments-need-space"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("comments-need-space", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "// give me some code that won't trigger a warning",
  ],

  invalid: [
    {
      code: `function hello() {
              // a
              //a
              console.log("aa");
            }`,
      errors: [{ messageId: "needSpace", type: null }],
    },
  ],
});
