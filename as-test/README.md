# Assembly Project test

## 1. Setting up this project

[Setting up a new project (AssemblyScript)](https://www.assemblyscript.org/getting-started.html#setting-up-a-new-project))

```bash
yarn add -D assemblyscript
# Passing the argument as the folder location
npx asinit ./as-test
```

```bash
This command will make sure that the following files exist in the project
directory '/Users/taka/code/mdh/js-design-patterns-for-react/as-test':

  ./assembly
  Directory holding the AssemblyScript sources being compiled to WebAssembly.

  ./assembly/tsconfig.json
  TypeScript configuration inheriting recommended AssemblyScript settings.

  ./assembly/index.ts
  Example entry file being compiled to WebAssembly to get you started.

  ./build
  Build artifact directory where compiled WebAssembly files are stored.

  ./build/.gitignore
  Git configuration that excludes compiled binaries from source control.

  ./asconfig.json
  Configuration file defining both a 'debug' and a 'release' target.

  ./package.json
  Package info containing the necessary commands to compile to WebAssembly.

  ./tests/index.js
  Stater test to check that the module is functioning.

  ./index.html
  Starter HTML file that loads the module in a browser.
```

Original package.json created in this folder

```bash
{
  "type": "module",
  "exports": {
    ".": {
      "import": "./build/release.js",
      "types": "./build/release.d.ts"
    }
  },
  "scripts": {
    "asbuild:debug": "asc as-test/assembly/index.ts --target as-test/debug --config as-test/asconfig.json",
    "asbuild:release": "asc as-test/assembly/index.ts --target as-test/release --config as-test/asconfig.json",
    "asbuild": "npm run asbuild:debug && npm run asbuild:release",
    "as:test": "node ./as-test/tests",
    "as:start": "npx serve ./as-test/index.html"
  },
  "devDependencies": {
    "assemblyscript": "^0.27.35"
  }
}
```
