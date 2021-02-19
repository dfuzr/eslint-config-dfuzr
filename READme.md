# ESLint (and Prettier) config

These are settings for ESLint and Prettier used by DFUZR.

## What it does

This setup lints your JavaScript code based on practices. Check the [.eslintrc.js](https://github.com/dfuzr/eslint-config-dfuzr/blob/master/.eslintrc.js) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D eslint-config-dfuzr # or yarn install --dev eslint-config-dfuzr
npx install-peerdeps --dev eslint-config-dfuzr
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'dfuzr'
  ]
}
```

3. Copy the [.prettierrc](https://github.com/dfuzr/eslint-config-dfuzr/blob/master/.prettierrc) file from this repository into your project folder

---

This repository is inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).
