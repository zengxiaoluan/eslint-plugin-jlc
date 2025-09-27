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

This rule accepts an options object with the following properties:

- `modulePrefix` (string): The import path prefix to check. Default: `"@app/modules"`
- `maxDepth` (integer): The expected number of path segments. Default: `3`

### Configuration Examples

```json
{
  "rules": {
    "jlc/import-constraint": ["error", {
      "modulePrefix": "@custom/modules",
      "maxDepth": 4
    }]
  }
}
```

With the above configuration:

```js
// ❌ Incorrect - too many path segments
import { a } from "@custom/modules/part/sub/component";

// ✅ Correct - expected depth
import { a } from "@custom/modules/part/sub";
```

## When Not To Use It

No

## Further Reading

No
