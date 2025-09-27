/**
 * @fileoverview the constraints of import
 * @author zeng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/import-constraint"),
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
    {
      code: "import {a} from '@custom/modules/part'",
      options: [{ modulePrefix: "@custom/modules" }],
    },
    {
      code: "import {a} from '@app/modules/part/sub/component'",
      options: [{ maxDepth: 5 }],
    },
  ],

  invalid: [
    {
      code: "import {a} from '@app/modules/part/part-list'",
      errors: [{ messageId: "import-constraint" }],
    },
    {
      code: "import {a} from '@custom/modules/part/sub'",
      options: [{ modulePrefix: "@custom/modules" }],
      errors: [{ messageId: "import-constraint" }],
    },
    {
      code: "import {a} from '@app/modules/part'",
      options: [{ maxDepth: 4 }],
      errors: [{ messageId: "import-constraint" }],
    },
  ],
});
