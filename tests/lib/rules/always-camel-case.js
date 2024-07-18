/**
 * @fileoverview Always camel case every thing
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/always-camel-case"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("always-camel-case", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "let a_b = 1;",
      errors: [{ messageId: "Identifier", type: null }],
    },
  ],
});
