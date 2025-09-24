/**
 * @fileoverview the constraints of import
 * @author zeng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/import-constraint-ecad"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("import-constraint", rule, {
  valid: [
    {
      code: "import {a} from '@app/modules/part'",
    },
  ],

  invalid: [
    {
      code: "import {a} from '@app/modules/part/part-list'",
      errors: [{ messageId: "import-constraint" }],
    },
  ],
});
