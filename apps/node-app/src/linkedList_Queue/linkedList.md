# Linked List Data Structure

```ts
interface Node<T> {
  val: T
  next?: Node<T>
  prev?: Node<T>
}
```

A -> B -> C -> D

Inserting F between A and B only takes updating `next` and `prev`. Insertion operation isn't affected by the length of the linked list. Therefore, it will be `O(1)`.

A -> F
F -> B
F <- B
A <- F

C -> B
B -> D

B = C.prev
B.next = C.next

#

Linked list is more complex than an array in the contiguous memory space. But, it is fast to get first or last values and also can grow in size.

- prepend/ append -> very fast.
- insertion in the middle -> slower than prepend/append because we need to traverse the list.
- Deletion from ends -> very fast.
- Deletion in the middle -> slower than deleting from the end.
- Get head/ tail -> very fast.
- Get in general -> slower than get head/ tail.

Here are the all the operations a linked list should do.

```ts
interface LinkedList<T> {
  get length(): number
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  removeAt(index: number): T | undefined
  append(item: T): void
  prepend(item: T): void
  get(index: number): T | undefined
}
```
