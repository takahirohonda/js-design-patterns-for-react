type Entry<K, V> = {
  key: K
  value: V
}

// Basic Hash Map implementation
export class SimpleMap<K extends string, V> {
  private buckets: Entry<K, V>[][] = []
  private capacity: number

  constructor(capacity = 53) {
    this.capacity = capacity
    this.buckets = new Array(capacity).fill(null).map(() => [])
  }

  private hash(key: K): number {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total = (total * 31 + key.charCodeAt(i)) % this.capacity
    }
    return total
  }

  set(key: K, value: V): void {
    const idx = this.hash(key)
    const bucket = this.buckets[idx]

    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value // overwrite
        return
      }
    }

    bucket.push({ key, value })
  }

  get(key: K): V | undefined {
    const idx = this.hash(key)
    const bucket = this.buckets[idx]

    for (const entry of bucket) {
      if (entry.key === key) return entry.value
    }

    return undefined
  }

  has(key: K): boolean {
    return this.get(key) !== undefined
  }

  delete(key: K): boolean {
    const idx = this.hash(key)
    const bucket = this.buckets[idx]

    const index = bucket.findIndex((entry) => entry.key === key)
    if (index !== -1) {
      bucket.splice(index, 1)
      return true
    }

    return false
  }
}
