export const performanceTestWithPrimeNumber = (n, isPrimeWasm) => {
  const results = []
  for (let i = 0; i < 1000; i++) {
    const timeStartWasm = performance.now()
    isPrimeWasm(n)
    const wasmTime = performance.now() - timeStartWasm

    const timeStartJS = performance.now()
    isPrimeJS(n)
    const jsTime = performance.now() - timeStartJS

    if (jsTime < wasmTime) {
      results.push('JavaScript')
    } else {
      results.push('WASM')
    }
  }

  return results.reduce(
    (acc, item) => {
      if (item === 'JavaScript') {
        acc['JavaScript']++
      }
      if (item === 'WASM') {
        acc['WASM']++
      }
      return acc
    },
    { JavaScript: 0, WASM: 0 }
  )
}

function isPrimeJS(x) {
  if (x < 2) {
    return false
  }

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false
    }
  }
  return true
}
