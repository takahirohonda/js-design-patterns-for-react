interface SNode<T> {
  value: T
  prev?: SNode<T>
}

export default class Stack<T> {
  public length: number
  private head?: SNode<T>

  constructor() {
    this.head = undefined
  }

  push(item: T): void {
    this.length++
    const node = { value: item } as SNode<T>
    if (!this.head) {
      this.head = node
      return
    }

    node.prev = this.head
    this.head = node
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)
    if (this.length === 0) {
      const head = this.head
      this.head = undefined
      return head?.value
    }

    const currentHead = this.head
    this.head = currentHead.prev
    return currentHead.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
