# The constraints of import (`jlc/import-constraint`)

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to enforce consistent import paths for modules by preventing direct imports from specific module files. Instead, imports should be made from the module's index file.

Examples of **incorrect** code for this rule:

```js
import { a } from "@app/modules/part/part-list";
```

Examples of **correct** code for this rule:

```js
import { a } from "@app/modules/part";
```

## Options

This rule accepts an array of constraint objects. Each constraint can be either:

**Object-based constraint:**
- `modulePrefix` (string, required): The import path prefix to check
- `maxDepth` (integer, optional): The expected number of path segments. Default: `3`

**Function-based constraint:**
- `test` (function, required): A function that receives `(importPath, node)` and returns `true` to report an error

### Configuration Examples

**Single constraint:**

```json
{
  "rules": {
    "jlc/import-constraint": [
      "error",
      [
        {
          "modulePrefix": "@custom/modules",
          "maxDepth": 4
        }
      ]
    ]
  }
}
```

**Multiple constraints (object + function):**

```js
{
  "rules": {
    "jlc/import-constraint": [
      "error",
      [
        {
          "modulePrefix": "@app/modules",
          "maxDepth": 3
        },
        {
          "test": (importPath) => importPath.includes('/internal/')
        }
      ]
    ]
  }
}
```

Examples with different constraint types:

```js
// Object-based constraint
// ❌ Incorrect - @app/modules should have 3 segments
import { a } from "@app/modules/part/sub/component";

// ✅ Correct - @app/modules with 3 segments
import { a } from "@app/modules/part";

// Function-based constraint
// ❌ Incorrect - contains '/internal/'
import { b } from "@lib/internal/utils";

// ✅ Correct - no '/internal/'
import { b } from "@lib/public/utils";
```

## When Not To Use It

No

## Further Reading

No
