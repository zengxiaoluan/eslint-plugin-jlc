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
      code: `import {a} from 'a/b/c';
import {b} from 'a/a/c/d';`,
      options: [[
        { modulePrefix: "a/b", maxDepth: 3 },
        { modulePrefix: "a/a", maxDepth: 4 },
      ]],
    },
    {
      code: "import {a} from '@app/modules/part'",
    },
    {
      code: "import {a} from '@custom/modules/part'",
      options: [[{ modulePrefix: "@custom/modules" }]],
    },
    {
      code: "import {a} from '@app/modules/part/sub/component'",
      options: [[{ modulePrefix: "@app/modules", maxDepth: 5 }]],
    },
  ],

  invalid: [
    {
      code: "import {a} from '@app/modules/part/part-list'",
      errors: [{ messageId: "import-constraint" }],
    },
    {
      code: "import {a} from '@custom/modules/part/sub'",
      options: [[{ modulePrefix: "@custom/modules" }]],
      errors: [{ messageId: "import-constraint" }],
    },
    {
      code: "import {a} from '@app/modules/part'",
      options: [[{ modulePrefix: "@app/modules", maxDepth: 4 }]],
      errors: [{ messageId: "import-constraint" }],
    },
  ],
});
