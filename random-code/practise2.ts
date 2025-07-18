// linked list
export interface LinkedListNode<T> {
  value: T
  next?: LinkedListNode<T>
}

export interface LinkedList<T> {
  head?: LinkedListNode<T>
  tail?: LinkedListNode<T>
  length: number
  append(value: T): void
  prepend(value: T): void
  delete(value: T): void
  find(value: T): LinkedListNode<T> | undefined
}

export interface MyMap<K, V> {
  set(key: K, value: V): void
  get(key: K): V | undefined
  has(key: K): boolean
  delete(key: K): boolean
  clear(): void
  size(): number
}
