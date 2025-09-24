# Comments need space (`jlc/comments-need-space`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Comments like below is not ok:

```js
function hello() {
  //comments
}
```

That is good:

```js
function hello() {
  // comments
}
```

Comments like below is not ok:

```js
function hello() {
  // comments中英文混杂没有空格
}
```

That is good:

```js
function hello() {
  // comments 中英文混杂有空格
}
```
