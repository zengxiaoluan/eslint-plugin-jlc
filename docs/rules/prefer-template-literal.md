# Prefer template literal (`jlc/prefer-template-literal`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

That is bad:

```js
const name = "tom";
const message = "Hello" + name;
```

That is good:

```js
const name = "tom";
const message = `Hello ${name}`;
```
