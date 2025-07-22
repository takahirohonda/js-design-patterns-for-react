# Stack exercise

```ts
interface StackNode<T> {
  value: T
  prev?: StackNode<T>
}

interface IStack<T> {
  push: (value: T) => void
  pop: () => T | undefined
  size: () => number
  isEmpty: boolean
}

export class Stack<T> implements IStack<T> {
  private length: number
  private head?: StackNode<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }
  // Implement all the methods
}
```
