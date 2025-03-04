# Stack

It's similar to queue, except it's backward.

Only add or remove from head

queue: A -> B -> C -> D

stack: A <- B <- C <- D

stack trace -> stack of functions we called up to this point.

When we add to stack, head is gonna be a new node and the new node will points to the previous head.

A <- B <- C <- D

A <- B <- C <- D <- E

D is head

this.head = E

push
pop
peak

Only allowing pushing and popping from one-side.

First go...

```ts
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

  push(item: T): void {
    const node = { value: item } as SNode<T>
    if (!this.head) {
      this.head = node
      return
    }

    this.previousHead = this.head.next
    this.head.next = this.head
    this.head = node
  }

  pop(): T | undefined {
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
```
