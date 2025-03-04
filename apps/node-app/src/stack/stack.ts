interface SNode<T> {
  value: T
  next?: SNode<T>
  prev?: SNode<T>
}

export default class Stack<T> {
  private head?: SNode<T>
  private previousHead?: SNode<T>

  constructor() {
    this.head = undefined
    this.previousHead = undefined
  }

  enqueue(item: T): void {
    const node = { value: item } as SNode<T>
    if (!this.head) {
      this.head = node
      return
    }

    this.previousHead = this.head.next
    this.head.next = this.head
    this.head = node
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.head = this.head.next
    this.head.next = this.previousHead
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
