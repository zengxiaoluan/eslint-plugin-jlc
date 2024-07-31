/**
 * @fileoverview No then with promise
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-then"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-then", rule, {
  valid: [
    // give me some code that won't trigger a warning
    `let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});
async function timeout(ms) {
  await promise;
  await promise;
}
`,
  ],

  invalid: [
    {
      code: `let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});
promise.then(function (result) {
 
});
`,
      errors: [{ messageId: "no-then", type: null }],
    },
  ],
});
