# eslint-plugin-zeng

Preferences eslint rule for zeng

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-jlc`:

```sh
npm install eslint-plugin-zeng --save-dev
```

## Usage

Add `zeng` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["zeng"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "zeng/rule-name": 2
  }
}
```

## Configurations

<!-- begin auto-generated configs list -->

TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

| Name                                                     | Description          |
| :------------------------------------------------------- | :------------------- |
| [comments-need-space](docs/rules/comments-need-space.md) | notation need spaces |

<!-- end auto-generated rules list -->
