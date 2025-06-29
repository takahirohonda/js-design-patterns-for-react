class Node<T> {
  data: T
  next: Node<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

interface LinkedList<T> {
  append(data: T): void
  prepend(data: T): void
  delete(data: T): void
  find(data: T): Node<T> | null
  display(): void
}
