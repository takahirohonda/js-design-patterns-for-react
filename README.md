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
nx g @nx/react:app apps/react-app
# Add lib for react
nx g @nx/react:library libs/my-react-lib
# Or just add lib
nx g lib libs/my-lib
nx add @nx/next
nx g @nx/next:app apps/my-new-app
# Add lib for next
nx add @nx/next:lib
nx g @nx/next:lib libs/my-next-lib
```
