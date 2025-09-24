# eslint-plugin-jlc Contributing Guide

Hi! We're really excited that you're interested in contributing to this eslint plugin! Before submitting your contribution, please read through the following guide.

## Repo Setup

To develop locally, fork the repository and clone it in your local machine.

To develop and test this repository:

1. Run `npm i` in eslint-plugin-jlc's root folder.

2. You must also install Yeoman, if you don't have it installed already. To install Yeoman, you can run this command:

```bash
npm i -g yo
```

3. With Node.js and Yeoman installed, you can run this command:

```bash
npm i -g generator-eslint
```

4. Run `yo eslint:rule` in root folder to create a new rule.

## Update docs

If you add a new rule, please remember to update the `README.md` file to include your new rule. You can follow the format of the existing rules in the file.

```bash
npm run update:eslint-docs
```
