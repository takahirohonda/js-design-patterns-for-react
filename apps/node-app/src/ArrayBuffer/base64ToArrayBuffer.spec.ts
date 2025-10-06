import { base64ToArrayBuffer } from './base64ToArrayBuffer'

describe('base64ToArrayBuffer', () => {
  const helloInBase64String = 'aGVsbG8='

  it('should return ArrayBuffer', () => {
    const buffer = base64ToArrayBuffer(helloInBase64String)
    const view = new Uint8Array(buffer)
    // 'aGVsbG8=' is 'hello'
    // h = 104, e = 101, l = 108, o = 111
    expect(buffer.byteLength).toBe(5)
    expect(view[0]).toBe(104)
    expect(view[1]).toBe(101)
    expect(view[2]).toBe(108)
    expect(view[3]).toBe(108)
    expect(view[4]).toBe(111)
  })
})
