# JS Design Patterns for React Application

Examples of JS Design Patterns that can be used in a React App.

## In Progress...

```bash
# https://nx.dev/getting-started/installation
# Not sure.. not working in this repo.. Get Failed to create a workspace error.
npx create-nx-workspace --pm yarn
```

```bash
yarn add nx@latest -D
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
nx g @nx/next:lib libs/my-next-lib
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
