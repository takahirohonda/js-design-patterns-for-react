export interface LinkedList<T> {
  get length(): number
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  removeAt(index: number): T | undefined
  append(item: T): void
  prepend(item: T): void
  get(index: number): T | undefined
}

export type Node<T> = {
  value: T
  prev?: Node<T>
  next?: Node<T>
}

export default class DoublyLinkedList<T> implements LinkedList<T> {
  private _length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this._length = 0
    this.head = undefined
    this.tail = undefined
  }

  // Get the length of the linked list
  get length(): number {
    return this._length
  }

  // Append an item to the end of the list
  append(item: T): void {
    const newNode: Node<T> = { value: item }

    if (this._length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this._length++
  }

  // Prepend an item to the beginning of the list
  prepend(item: T): void {
    const newNode: Node<T> = { value: item }

    if (this._length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head!.prev = newNode
      this.head = newNode
    }

    this._length++
  }

  // Insert an item at a specific index
  insertAt(item: T, index: number): void {
    if (index < 0 || index > this._length) {
      throw new Error('Index out of bounds')
    }

    if (index === 0) {
      this.prepend(item)
      return
    }

    if (index === this._length) {
      this.append(item)
      return
    }

    const newNode: Node<T> = { value: item }
    let current = this.head
    let currentIndex = 0

    while (currentIndex < index - 1) {
      current = current!.next
      currentIndex++
    }

    const nextNode = current!.next
    current!.next = newNode
    newNode.prev = current
    newNode.next = nextNode
    if (nextNode) {
      nextNode.prev = newNode
    }

    this._length++
  }

  // Get the item at a specific index
  get(index: number): T | undefined {
    if (index < 0 || index >= this._length) {
      return undefined
    }

    let current = this.head
    let currentIndex = 0

    while (currentIndex < index) {
      current = current!.next
      currentIndex++
    }

    return current!.value
  }

  // Remove a specific item from the list
  remove(item: T): T | undefined {
    let current = this.head

    while (current) {
      if (current.value === item) {
        if (current.prev) {
          current.prev.next = current.next
        } else {
          this.head = current.next
        }

        if (current.next) {
          current.next.prev = current.prev
        } else {
          this.tail = current.prev
        }

        this._length--
        return current.value
      }
      current = current.next
    }

    return undefined
  }

  // Remove an item at a specific index
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this._length) {
      return undefined
    }

    if (index === 0) {
      const value = this.head!.value
      this.head = this.head!.next
      if (this.head) {
        this.head.prev = undefined
      }
      this._length--
      return value
    }

    if (index === this._length - 1) {
      const value = this.tail!.value
      this.tail = this.tail!.prev
      if (this.tail) {
        this.tail.next = undefined
      }
      this._length--
      return value
    }

    let current = this.head
    let currentIndex = 0

    while (currentIndex < index) {
      current = current!.next
      currentIndex++
    }

    const value = current!.value
    const prevNode = current!.prev
    const nextNode = current!.next

    if (prevNode) {
      prevNode.next = nextNode
    }

    if (nextNode) {
      nextNode.prev = prevNode
    }

    this._length--
    return value
  }
}
