# hello-flow

Where I learn Flow.

## Get Started

Install necessary packages.

```sh
yarn install --dev \
    babel-preset-es2015 \
    babel-core \
    babel-plugin-transform-flow-strip-types \
    flow-bin \
    flow-typed
```

For build via command line

```sh
yarn install --dev browserify babelify
```

Add NPM scripts. (optional)

```json
{
  "scripts": {
    "browserify": "browserify",
    "flow": "flow",
    "flow-typed-install": "flow-typed install --skip"
  }
}
```

For Babel

```json
{
  "presets": ["es2015"],
  "plugins": ["transform-flow-strip-types"]
}
```

For ESLint

```sh
yarn install --dev \
    eslint \
    babel-eslint \
    eslint-plugin-flowtype
```

```json
{
  "parser": "babel-eslint",
  "plugins": ["flowtype"],
  "extends": ["plugin:flowtype/recommended"]
  // If you use eslint-plugin-import instead
  "rules": {
    "no-duplicate-imports": "off",
    "import/no-duplicates": "error",
  }
}
```

For Prettier

```json
{
  "parser": "flow"
}
```

Install the type definitions of dependencies.

```sh
yarn run flow-typed-install react
```
