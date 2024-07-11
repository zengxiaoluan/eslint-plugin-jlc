/**
 * @fileoverview prefer template literal
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/prefer-template-literal"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("prefer-template-literal", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const message = `Hello ${name}`",
  ],

  invalid: [
    {
      code: "const name='tom'; const message = 'Hello' + name",
      errors: [{ messageId: "prefer", type: null }],
    },
  ],
});
