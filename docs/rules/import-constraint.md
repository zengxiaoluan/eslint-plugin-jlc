# The constraints of import (`jlc/import-constraint`)

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to enforce consistent import paths for ECAD modules by preventing direct imports from specific module files. Instead, imports should be made from the module's index file.

Examples of **incorrect** code for this rule:

```js
import { a } from "@app/modules/part/part-list";
```

Examples of **correct** code for this rule:

```js
import { a } from "@app/modules/part";
```

## Options

This rule accepts an array of constraint objects, each with the following properties:

- `modulePrefix` (string, required): The import path prefix to check
- `maxDepth` (integer, optional): The expected number of path segments. Default: `3`

### Configuration Examples

**Single constraint:**
```json
{
  "rules": {
    "jlc/import-constraint": ["error", [
      {
        "modulePrefix": "@custom/modules",
        "maxDepth": 4
      }
    ]]
  }
}
```

**Multiple constraints:**
```json
{
  "rules": {
    "jlc/import-constraint": ["error", [
      {
        "modulePrefix": "@app/modules",
        "maxDepth": 3
      },
      {
        "modulePrefix": "@lib/components",
        "maxDepth": 4
      }
    ]]
  }
}
```

With multiple constraints, different module prefixes can have different depth requirements:

```js
// ❌ Incorrect - @app/modules should have 3 segments
import { a } from "@app/modules/part/sub/component";

// ✅ Correct - @app/modules with 3 segments
import { a } from "@app/modules/part";

// ❌ Incorrect - @lib/components should have 4 segments  
import { a } from "@lib/components/button";

// ✅ Correct - @lib/components with 4 segments
import { a } from "@lib/components/ui/button";
```

## When Not To Use It

No

## Further Reading

No
