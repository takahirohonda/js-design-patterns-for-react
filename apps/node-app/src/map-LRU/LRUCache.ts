type Node = {
  key: number
  value: number
  prev: Node | null
  next: Node | null
}

export class LRUCache {
  private capacity: number
  private cache: Map<number, Node>
  private head: Node
  private tail: Node

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()

    // Dummy head and tail to simplify insert/delete logic
    this.head = { key: 0, value: 0, prev: null, next: null }
    this.tail = { key: 0, value: 0, prev: null, next: null }
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    const node = this.cache.get(key)
    if (!node) return -1

    this.moveToHead(node)
    return node.value
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key)

    if (node) {
      node.value = value
      this.moveToHead(node)
    } else {
      const newNode: Node = {
        key,
        value,
        prev: null,
        next: null,
      }

      this.cache.set(key, newNode)
      this.addNode(newNode)

      if (this.cache.size > this.capacity) {
        const tail = this.popTail()
        if (tail) this.cache.delete(tail.key)
      }
    }
  }

  private addNode(node: Node) {
    node.prev = this.head
    node.next = this.head.next

    if (this.head.next) this.head.next.prev = node
    this.head.next = node
  }

  private removeNode(node: Node) {
    const prev = node.prev
    const next = node.next

    if (prev) prev.next = next
    if (next) next.prev = prev
  }

  private moveToHead(node: Node) {
    this.removeNode(node)
    this.addNode(node)
  }

  private popTail(): Node | null {
    if (!this.tail.prev || this.tail.prev === this.head) return null

    const node = this.tail.prev
    this.removeNode(node!)
    return node!
  }
}
