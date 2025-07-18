import { LinkedListNode } from './practise2'

export class LinkedList<T> {
  private head?: LinkedListNode<T> | null = null
  private tail?: LinkedListNode<T> | null = null
  private length = 0

  append(value: T): void {
    const newNode: LinkedListNode<T> = {
      value,
      next: undefined,
    }

    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }

    this.length++
  }

  prepend(value: T): void {
    const newNode: LinkedListNode<T> = {
      value,
      next: undefined,
    }

    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head || undefined
      this.head = newNode
    }
    this.length++
  }

  delete(value: T): void {
    if (this.length === 0) {
      return
    }

    let currentNode = this.head
    let previousNode: LinkedListNode<T> | undefined = undefined

    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode) {
          previousNode.next = currentNode.next
        } else {
          this.head = currentNode.next
        }
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
  }

  find(value: T): LinkedListNode<T> | undefined {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return undefined
  }
}
