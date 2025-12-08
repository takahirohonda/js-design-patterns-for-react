# JS Design Patterns for React Application

Programming exercises & learning practices for Frontend development.

## 1. Get Started

```bash
npm i -f
npm nx dev react-app
```

## 2. Nx commands

# Starting project with Nx

This was initially set up by yarn. We migrated to npm now.

```bash
yarn init -y
yarn add nx@latest -D # use the latest node if we go with @latest
yarn nx init
yarn add nx add @nx/react
yarn nx g @nx/react:app apps/react-app
# Add lib for react
yarn nx g @nx/react:library libs/my-react-lib
# Or just add lib
yarn nx g lib libs/my-lib
yarn nx add @nx/next
yarn nx g @nx/next:app apps/next-app
# Add lib for next
nx add @nx/next:lib
nx g @nx/next:lib libs/fp-exercise

#
yarn add @nx/node -D
yarn nx g @nx/node:app apps/node-app
yarn nx g @nx/node:library libs/my-utils
```

## Upgrading Nx and all the associated nx modules

```bash
yarn nx report
yarn remove nx
yarn add nx@latest
# This will create a migration file (migration.json)
# And update the dependencies in package.json.
yarn nx migrate latest
yarn install
yarn nx migrate --run-migrations
```

## Random reference

[Styling button with tailwind examples](https://flowbite.com/docs/components/buttons/)

# to make web assembly yarn command to work...

This is required to be added in `package.json` for `as-test` project to properly use web assembly compiled code. However, this changes how Node deals with `.ts` file. `Jest` or `ts-node` needs to be configured for EMS properly.

```json
  "type": "module",
  "exports": {
    ".": {
      "import": "./as-test//build/release.js",
      "types": "./as-test/build/release.d.ts"
    }
  },
```

```bash
node --loader ts-node/esm
```

or add this in `jest.config.js`

```js
export default {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
}
```
