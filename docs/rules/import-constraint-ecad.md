# The constraints of import (`jlc/import-constraint-ecad`)

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

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
