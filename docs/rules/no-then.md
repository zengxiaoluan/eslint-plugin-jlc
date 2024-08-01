# No then with promise (`jlc/no-then`)

<!-- end auto-generated rule header -->

That is bad:

```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {

});
```

That is good:

```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

async function timeout(ms) {
  await promise()
}
```
