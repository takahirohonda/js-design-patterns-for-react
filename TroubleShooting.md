Cannot get it working...

```js
const js = require('@eslint/js')
const nx = require('@nx/eslint/plugin')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')
const prettierPlugin = require('eslint-plugin-prettier')
const importPlugin = require('eslint-plugin-import')
const jsoncParser = require('jsonc-eslint-parser')
const jestPlugin = require('eslint-plugin-jest')

module.exports = [
  {
    ignores: ['**/dist', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: 'tsconfig.base.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      jest: jestPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...jestPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      parser: js.parsers.jsx,
    },
    plugins: {
      '@nx': nx,
    },
    rules: {},
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.base.json',
        },
      },
    },
  },
]
```

```bash
# eslint
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-config-prettier eslint-plugin-cypress eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @eslint/js eslint-plugin-prettier eslint-plugin-jest
# jest
yarn add -D @nx/jest @testing-library/react jest jest-environment-jsdom jest-environment-node
```

Original

```js
const nx = require('@nx/eslint-plugin')

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
]
```

Not sure...
error

```bash
Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it.
      An error occurred while processing files for the @nx/eslint/plugin plugin.
    - apps/react-app/eslint.config.js: Cannot read properties of undefined (reading 'flat/base')
      TypeError: Cannot read properties of undefined (reading 'flat/base')
          at Object.<anonymous> (/Users/taka/code/mdh/js-design-patterns-for-react/eslint.config.js:11:16)
          at Module._compile (node:internal/modules/cjs/loader:1376:14)
          at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
          at Module.load (node:internal/modules/cjs/loader:1207:32)
          at Module._load (node:internal/modules/cjs/loader:1023:12)
          at Module.require (node:internal/modules/cjs/loader:1235:19)
          at require (node:internal/modules/helpers:176:18)
          at Object.<anonymous> (/Users/taka/code/mdh/js-design-patterns-for-react/apps/react-app/eslint.config.js:2:20)
          at Module._compile (node:internal/modules/cjs/loader:1376:14)
          at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    - eslint.config.js: This is caused by either a bug in Node.js or incorrect usage of Node.js internals.
  Please open an issue with this stack trace at https://github.com/nodejs/node/issues

      Error [ERR_INTERNAL_ASSERTION]: This is caused by either a bug in Node.js or incorrect usage of Node.js internals.
      Please open an issue with this stack trace at https://github.com/nodejs/node/issues

          at assert (node:internal/assert:14:11)
          at cjsLoader (node:internal/modules/esm/translators:344:7)
          at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:294:7)
          at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
          at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
          at async importModuleDynamicallyWrapper (node:internal/vm/module:431:15)
          at async loadConfigFile (/Users/taka/code/mdh/js-design-patterns-for-react/node_modules/eslint/lib/config/config-loader.js:202:21)
          at async ConfigLoader.calculateConfigArray (/Users/taka/code/mdh/js-design-patterns-for-react/node_modules/eslint/lib/config/config-loader.js:512:32)
          at async #calculateConfigArray (/Users/taka/code/mdh/js-design-patterns-for-react/node_modules/eslint/lib/config/config-loader.js:646:29)
          at async ESLint.calculateConfigForFile (/Users/taka/code/mdh/js-design-patterns-for-react/node_modules/eslint/lib/eslint/eslint.js:1060:25)
```
