// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b
}

export function minusOne(n: i32): i32 {
  return n - 1
}

// Grow memory by 2 pages (128Kb)
memory.grow(2)
// Save 21 at index 0
store<u8>(0, 21)
// Save 99 at index 1
store<u8>(1, 99)

export function readMemory(n: i32): i32 {
  return load<u8>(n)
}

// for performance test
export function isPrimeWasm(x: u32): bool {
  if (x < 2) {
    return false
  }

  for (let i: u32 = 2; i < x; i++) {
    if (x % i === 0) {
      return false
    }
  }

  return true
}
