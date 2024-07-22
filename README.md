# eslint-plugin-jlc

Preferences of eslint for jlc and jlc eda

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-jlc`:

```sh
npm install eslint-plugin-jlc --save-dev
```

## Usage

Add `jlc` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jlc"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jlc/comments-need-space": 2
  }
}
```

## Configurations

<!-- begin auto-generated configs list -->

TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

| Name                                                             | Description                   |
| :--------------------------------------------------------------- | :---------------------------- |
| [always-camel-case](docs/rules/always-camel-case.md)             | Always camel case every thing |
| [comments-need-space](docs/rules/comments-need-space.md)         | comments need space           |
| [prefer-template-literal](docs/rules/prefer-template-literal.md) | prefer template literal       |

<!-- end auto-generated rules list -->
