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

|    | Name          |
| :- | :------------ |
| ✅  | `recommended` |

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.

| Name                                                             | Description                                   | 💼 |
| :--------------------------------------------------------------- | :-------------------------------------------- | :- |
| [always-camel-case](docs/rules/always-camel-case.md)             | Always camel case every thing                 | ✅  |
| [comments-need-space](docs/rules/comments-need-space.md)         | comments need space                           | ✅  |
| [kebab-case](docs/rules/kebab-case.md)                           | kebab case your file name and directory name. | ✅  |
| [no-then](docs/rules/no-then.md)                                 | No then with promise                          | ✅  |
| [prefer-template-literal](docs/rules/prefer-template-literal.md) | prefer template literal                       | ✅  |

<!-- end auto-generated rules list -->
