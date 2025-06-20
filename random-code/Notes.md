# Using Array.includes method

```ts
const hasAlreadySubscribed =
  listenerForEvent.filter((existingListener) => {
    return existingListener === listener
  }).length > 0
```

This is more simplified version

```ts
const hasAlreadySubscribed = listenerForEvent.includes(listener)
```

Unsubscribe

Safe removal: Using indexOf() and splice() is the standard way to remove specific array elements.

```ts
const index = listenerForEvent.indexOf(listener)
if (index > -1) {
  listenerForEvent.splice(index, 1)
}
```

```ts
// Optional: Add unsubscribe functionality
export const unsubscribe = (
  eventName: string,
  listener: (data: unknown) => void
) => {
  const listenerForEvent = listeners[eventName]
  if (!listenerForEvent) return

  const index = listenerForEvent.indexOf(listener)
  if (index > -1) {
    listenerForEvent.splice(index, 1)
  }

  // Clean up empty arrays
  if (listenerForEvent.length === 0) {
    delete listeners[eventName]
  }
}

// Optional: Clear all listeners for an event
export const clearListeners = (eventName: string) => {
  delete listeners[eventName]
}

// Optional: Get listener count for debugging
export const getListenerCount = (eventName: string): number => {
  return listeners[eventName]?.length || 0
}
```

Observer pattern note...

```ts
// Current implementation - works well!
const customers: ((data: any) => void)[] = []

export const notify = (data: any) => {
  customers.forEach((customer) => {
    customer(data)
  })
}

export const subscribe = (customer: (data: any) => void) => {
  if (customers.includes(customer)) {
    return
  }
  customers.push(customer)
}

// Suggested improvements:

// 1. Add unsubscribe functionality
export const unsubscribe = (customer: (data: any) => void) => {
  const index = customers.indexOf(customer)
  if (index > -1) {
    customers.splice(index, 1)
  }
}

// 2. Better type safety (if using TypeScript)
interface Observer<T> {
  (data: T): void
}

class TypedObserver<T> {
  private observers: Observer<T>[] = []

  subscribe(observer: Observer<T>): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer)
    }
  }

  unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notify(data: T): void {
    this.observers.forEach((observer) => observer(data))
  }

  getObserverCount(): number {
    return this.observers.length
  }

  clear(): void {
    this.observers = []
  }
}

// 3. Error handling version
export const notifyWithErrorHandling = (data: any) => {
  customers.forEach((customer) => {
    try {
      customer(data)
    } catch (error) {
      console.error('Observer error:', error)
      // Could also remove the problematic observer
    }
  })
}

// 4. Return subscription handle pattern
export const subscribeWithHandle = (customer: (data: any) => void) => {
  if (customers.includes(customer)) {
    return () => {} // No-op if already subscribed
  }

  customers.push(customer)

  // Return unsubscribe function
  return () => {
    const index = customers.indexOf(customer)
    if (index > -1) {
      customers.splice(index, 1)
    }
  }
}
```
