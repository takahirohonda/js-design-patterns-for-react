class WasmLoader {
  constructor() {
    this._imports = {
      env: {
        abort() {
          throw new Error('Abort called from wasm file')
        },
      },
      index: {
        log(n) {
          console.log(n)
        },
      },
    }
  }

  async wasm(path) {
    console.log(`fetching ${path}`)

    if (!WebAssembly.instantiateStreaming) {
      return this.wasmFallback(path)
    }

    const { instance } = await WebAssembly.instantiateStreaming(fetch(path))

    return instance?.exports
  }

  async wasmFallback(path) {
    console.log('using fallback')
    const response = await fetch(path)
    const bytes = await response?.arrayBuffer()
    const { instance } = await WebAssembly.instantiate(bytes)

    return instance?.exports
  }
}
