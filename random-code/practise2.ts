const listeners: ((data: unknown) => void)[] = []

export const subscribe = (listener: (data: unknown) => void): void => {
  const hasAlreadySubscribed = listeners.includes(listener)
  if (hasAlreadySubscribed) {
    return
  }
  listeners.push(listener)
}

export const unsubscribe = (listener: (data: unknown) => void): void => {
  const updatedListeners = listeners.filter((l) => l !== listener)
  listeners.length = 0
  listeners.push(...updatedListeners)
}

export const notify = (data: unknown): void => {
  listeners.forEach((listener) => listener(data))
}

// fibonacci function
export const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

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
