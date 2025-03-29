# Assembly Project test

## 1. Setting up this project

[Setting up a new project (AssemblyScript)](https://www.assemblyscript.org/getting-started.html#setting-up-a-new-project))

```bash
yarn add -D assemblyscript
# Passing the argument as the folder location
npx asinit ./as-test
```

## 2. Web Assembly Reference

### 2-1. browser

All modern browsers have the `WebAssembly` global object with 5 static methods.

`WebAssembly.compile()` - Compile wasm
`WebAssembly.compileStreaming()` - Compile wasm from a streamed source
`WebAssembly.instantiate()` - Compile and instantiate wasm
`WebAssembly.instantiateStreaming()` - Compile and instantiate wasm from a streamed source
`WebAssembly.validate()` - Checks if wasm code is valid

When we are fetching wasm from our server, we can use `instantiate()` and `instantiateStreaming()`. -> see the folder, `js/loader.js`

### 2-2. Memory

In Web Assembly, memory is linear.

JavaScript memory uses both a stack and heap. A heap is dynamic, non-linear memory used by a program to arbitrarily read and store data.

**Memory**

`WebAssembly.Memory`: memory shared by JS and WA. They can pass data back and forth in this.

**Arrays**

- `ArrayBuffer`: an object that represents raw binary data.
- `SharedArrayBuffer`: an ArrayBuffer that represents a fixed-length portion of memory that can be shared by multiple processes.
- `TypedArray`: Because ArrayBuffer SharedArrayBuffer are merely representations of raw binary data, we need to use a TypedArray to properly coerce the raw data into something useable by our processes.

```ts
// Create an ArrayBuffer and allocate 1 page (64k) of memory
const memory = new WebAssembly.Memory({ initial: 1, shared: true })
// Create an array-like object where each index is a pointer to a 16-bit unsigned integer
const u16Array = new Uint16Array(memory.buffer)
// We can write directly to memory which is accessible by both JS and WA
u16Array[0] = 42
```

## 3. Troubleshooting

1. `npx serve` needs to have a folder name

```bash
 "as:start": "npx serve ./as-test"
 # this errors because it thinks index.html is a folder
 "as:start": "npx serve ./as-test"
```

2. target is the property in the config file

```bash
 "asbuild:debug": "asc as-test/assembly/index.ts --target debug --config ./as-test/asconfig.json",
# this doesn't work because target is not a folder path
"asbuild:debug": "asc as-test/assembly/index.ts --target as-test/debug --config ./as-test/asconfig.json",
```

# Ref

Wasi - WebAssembly System Interface. A common API to operating-system-like features.
Made with Web Assembly - An open source showcase of awesome production applications, side projects, and use cases made with WebAssembly.
ASBind - Library to handle passing high-level data structures between AssemblyScript and JavaScript
Binaryen - Binaryen is a compiler and toolchain infrastructure library for WebAssembly.

- [Emscripten](https://emscripten.org/docs/getting_started/Tutorial.html) - A complete compiler toolchain to WebAssembly.

Built With AssemblyScript - A collection of AssemblyScript projects
Interference AssemblyScript - Advanced example of using AssemblyScript

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
