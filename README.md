# eslint-plugin-jlc [![npm](https://img.shields.io/npm/v/eslint-plugin-jlc.svg)](https://www.npmjs.com/package/eslint-plugin-jlc) [![build status](https://github.com/zengxiaoluan/eslint-plugin-jlc/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/zengxiaoluan/eslint-plugin-jlc/actions/workflows/node.js.yml) [![Download](https://img.shields.io/npm/dm/eslint-plugin-jlc)](https://www.npmjs.com/package/eslint-plugin-jlc)

An opinionated collection of ESLint rules used by JLC.

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

|    | Name          |
| :- | :------------ |
| ✅  | `recommended` |

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                             | Description                                   | 💼 | 🔧 |
| :--------------------------------------------------------------- | :-------------------------------------------- | :- | :- |
| [always-camel-case](docs/rules/always-camel-case.md)             | Always camel case every thing                 | ✅  |    |
| [comments-need-space](docs/rules/comments-need-space.md)         | Comments need space                           | ✅  | 🔧 |
| [import-constraint-ecad](docs/rules/import-constraint-ecad.md)   | The constraints of import                     |    |    |
| [kebab-case](docs/rules/kebab-case.md)                           | kebab case your file name and directory name. | ✅  |    |
| [no-then](docs/rules/no-then.md)                                 | No then with promise                          | ✅  |    |
| [prefer-template-literal](docs/rules/prefer-template-literal.md) | prefer template literal                       | ✅  |    |

<!-- end auto-generated rules list -->
