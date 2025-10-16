# Java List

- ArrayList
- LinkedList
- Vector
- Stack - implements stack data structure.

`ArrayList` is not a linked list. No chain of linked nodes. It's a resizable array. Whenever the size increases, it creates a new array.

`LinkedList` is built from linked nodes.

| Feature                 | `ArrayList`            | `LinkedList`                        |
| ----------------------- | ---------------------- | ----------------------------------- |
| Data structure          | Dynamic array          | Doubly linked list                  |
| Access by index         | Fast (`O(1)`)          | Slow (`O(n)`)                       |
| Insert/remove in middle | Slow (`O(n)`)          | Fast (`O(1)`, if you have node ref) |
| Memory layout           | Contiguous             | Scattered                           |
| Internal field          | `Object[] elementData` | `Node<E> first, last`               |

`Vector` is a synchronised `ArrayList`

Every method in Vector is wrapped in synchronization:

```java
public synchronized void add(E e) { ... }
```

- Only one thread can modify or access the vector at a time.
- Prevents race conditions in multi-threaded code.
- But adds overhead even if you only use it in one thread.

That’s why ArrayList replaced it — it’s faster and simpler in most apps.

| Concept      | Structure Type     | Thread-safe    | Dynamic | Modern?   |
| ------------ | ------------------ | -------------- | ------- | --------- |
| `Array`      | Fixed-size         | ✅ (by nature) | ❌      | ✅        |
| `ArrayList`  | Dynamic array      | ❌             | ✅      | ✅        |
| `Vector`     | Dynamic array      | ✅             | ✅      | ⚠️ Legacy |
| `LinkedList` | Doubly linked list | ❌             | ✅      | ✅        |

## More

Building Dynamic Array with JS

# Version 1 - shortcut with Array

new Array(n) looks like a low-level construct,
but it’s still a high-level JavaScript object — not raw memory.

```js
class DynamicArray {
  constructor(initialCapacity = 2) {
    this.capacity = initialCapacity // total available space
    this.length = 0 // number of elements actually stored
    this.data = new Array(this.capacity)
  }

  get(index) {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of bounds')
    return this.data[index]
  }

  push(value) {
    if (this.length === this.capacity) {
      this.#resize() // private method
    }
    this.data[this.length] = value
    this.length++
  }

  pop() {
    if (this.length === 0) throw new Error('Array is empty')
    const value = this.data[this.length - 1]
    this.data[this.length - 1] = undefined
    this.length--
    return value
  }

  #resize() {
    // double capacity
    this.capacity *= 2
    const newData = new Array(this.capacity)
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }

  toString() {
    return `[${this.data.slice(0, this.length).join(', ')}]`
  }
}
```

# version 2 - ArrayBuffer + Int32Array

Because JS has to use ArrayBuffer + TypedArray, it cannot have different types like `ArrayList` in Java does...

```js
class LowLevelDynamicArray {
  constructor(initialCapacity = 2) {
    this.BYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT
    this.capacity = initialCapacity
    this.length = 0
    this.buffer = new ArrayBuffer(this.capacity * this.BYTES_PER_ELEMENT)
    this.view = new Int32Array(this.buffer)
  }

  get(index) {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of bounds')
    return this.view[index]
  }

  push(value) {
    if (this.length === this.capacity) {
      this.#resize()
    }
    this.view[this.length] = value
    this.length++
  }

  pop() {
    if (this.length === 0) throw new Error('Array is empty')
    const value = this.view[this.length - 1]
    this.length--
    return value
  }

  #resize() {
    this.capacity *= 2
    const newBuffer = new ArrayBuffer(this.capacity * this.BYTES_PER_ELEMENT)
    const newView = new Int32Array(newBuffer)
    newView.set(this.view) // fast copy at memory level
    this.buffer = newBuffer
    this.view = newView
  }

  toString() {
    return `[${Array.from(this.view.slice(0, this.length)).join(', ')}]`
  }
}
```
