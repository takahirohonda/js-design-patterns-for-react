# Array

Creating an array buffer

```ts
const arrayBuffer = new ArrayBuffer(3)
console.log(arrayBuffer)
```

```bash
ArrayBuffer { [Uint8Contents]: <00 00 00>, byteLength: 3 }
```

## Notes

If you set ArrayBuffer length to 5 and try to create Uint16Array, we get this error:

```ts
const arrayBuffer = new ArrayBuffer(5)
a16 = new Uint16Array(arrayBuffer)
```

```bash
RangeError: byte length of Uint16Array should be a multiple of 2
        at new Uint16Array (<anonymous>)
```

## Array Buffer

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

It's an array of bytes, often referred to in other languages as `byte array`.

## Checking output

```bash
console.log
    ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

      at run (src/array-buffer/arrayBuffer.ts:3:11)

  console.log
    ArrayBuffer {
      [Uint8Contents]: <00 00 00 00 00 00>,
      byteLength: 6,
      '1': 11,
      '3': 10
    }

      at run (src/array-buffer/arrayBuffer.ts:8:11)

  console.log
    ArrayBuffer {
      [Uint8Contents]: <2d 00 2d 00 00 00>,
      byteLength: 6,
      '1': 11,
      '3': 10
    }

      at run (src/array-buffer/arrayBuffer.ts:15:11)

  console.log
    Uint8Array(6) [ 45, 0, 45, 0, 0, 0 ]

      at run (src/array-buffer/arrayBuffer.ts:16:11)

  console.log
    ArrayBuffer {
      [Uint8Contents]: <2d 00 2d 00 45 45>,
      byteLength: 6,
      '1': 11,
      '3': 10
    }

      at run (src/array-buffer/arrayBuffer.ts:21:11)

  console.log
    Uint16Array(3) [ 45, 45, 17733 ]
```
