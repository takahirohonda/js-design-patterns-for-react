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
