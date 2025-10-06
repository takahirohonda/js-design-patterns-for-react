export const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
  const binaryString = atob(base64)
  console.log(`binaryString with atob: ${binaryString}`)

  const len = binaryString.length
  console.log(`length of binaryString: ${len}`)

  const bytes = new Uint8Array(len)

  for (let i = 0; i < len; i += 1) {
    console.log(
      `checking binaryString.charCodeAt(${i}): ${binaryString.charCodeAt(i)}`
    )
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}
