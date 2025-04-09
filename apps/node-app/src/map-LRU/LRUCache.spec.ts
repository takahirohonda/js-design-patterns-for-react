import { LRUCache } from './LRUCache'

describe('LRUCache', () => {
  it('should return -1 for missing keys', () => {
    const lru = new LRUCache(2)
    expect(lru.get(1)).toBe(-1)
  })

  it('should set and get values correctly', () => {
    const lru = new LRUCache(2)
    lru.put(1, 100)
    lru.put(2, 200)

    expect(lru.get(1)).toBe(100)
    expect(lru.get(2)).toBe(200)
  })

  it('should evict least recently used item when over capacity', () => {
    const lru = new LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    lru.get(1) // Use key 1 → now 2 is least recently used
    lru.put(3, 3) // Should evict key 2

    expect(lru.get(2)).toBe(-1)
    expect(lru.get(1)).toBe(1)
    expect(lru.get(3)).toBe(3)
  })

  it('should update value and move key to front on put', () => {
    const lru = new LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    lru.put(1, 10)

    expect(lru.get(1)).toBe(10)
    lru.put(3, 3) // Should evict key 2

    expect(lru.get(2)).toBe(-1)
    expect(lru.get(3)).toBe(3)
  })

  it('should handle repeated gets', () => {
    const lru = new LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    lru.get(2)
    lru.get(2)
    lru.put(3, 3) // Should evict key 1

    expect(lru.get(1)).toBe(-1)
    expect(lru.get(2)).toBe(2)
    expect(lru.get(3)).toBe(3)
  })
})
