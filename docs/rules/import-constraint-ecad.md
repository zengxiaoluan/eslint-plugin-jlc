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

No

## Further Reading

No
