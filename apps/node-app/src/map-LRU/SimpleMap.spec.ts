import { SimpleMap } from './SimpleMap'

describe('SimpleMap', () => {
  let map: SimpleMap<string, number>

  beforeEach(() => {
    map = new SimpleMap()
  })

  it('sets and gets values', () => {
    map.set('apple', 5)
    map.set('banana', 10)

    expect(map.get('apple')).toBe(5)
    expect(map.get('banana')).toBe(10)
  })

  it('overwrites existing keys', () => {
    map.set('apple', 5)
    map.set('apple', 99)

    expect(map.get('apple')).toBe(99)
  })

  it('returns undefined for missing keys', () => {
    expect(map.get('not-found')).toBeUndefined()
  })

  it('checks if a key exists', () => {
    map.set('kiwi', 8)

    expect(map.has('kiwi')).toBe(true)
    expect(map.has('grape')).toBe(false)
  })

  it('deletes keys', () => {
    map.set('mango', 100)
    expect(map.delete('mango')).toBe(true)
    expect(map.get('mango')).toBeUndefined()
    expect(map.delete('mango')).toBe(false)
  })
})
