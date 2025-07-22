# Doubly Linked List exercise

Implement doubly linked list.

```ts
export type Node<T> = {
  value: T
  prev?: Node<T>
  next?: Node<T>
}

export interface DoublyLinkedList<T> {
  getLength(): number
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  append(item: T): void
  prepend(item: T): void
  get(index: number): T | undefined
}

export default class DoublyLinkedList<T> implements DoublyLinkedList<T>
```
