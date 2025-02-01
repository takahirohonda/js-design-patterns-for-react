export const run = () => {
  const arrayBuffer = new ArrayBuffer(6)
  console.log(arrayBuffer)

  arrayBuffer[1] = 11
  arrayBuffer[3] = 10

  console.log(arrayBuffer)

  // Actually we need to convert this in to a uint8 or uint 16 array

  const a8 = new Uint8Array(arrayBuffer)
  a8[0] = 45
  a8[2] = 45
  console.log(arrayBuffer)
  console.log(a8)

  const a16 = new Uint16Array(arrayBuffer)

  a16[2] = 0x4545
  console.log(arrayBuffer)
  console.log(a16)
}
