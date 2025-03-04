# Queue

A queue is a linear data structure that follows the First in, `First Out Principle (FIFO)`. Queue supports operations such as `peek`, `enqueue`, `dequeue` and `print()`.

```bash
A -> B -> C -> D
```

When we add E, we add E to the end

```bash
A -> B -> C -> D -> E
```

- Insertion
  this.tail.next = E
  this.tail = E

- `pop` operation
  h = head
  head = head.next
  h.next = null

peek -> what is my first value without updating the data.

## random

queue is British, Americans call it `line`.
