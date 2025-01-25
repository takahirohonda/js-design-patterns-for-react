export const listeners: Record<string, ((data?: unknown) => void)[]> = {}

export const subscribe = (
  eventName: string,
  callback: (data?: unknown) => void
) => {
  if (!listeners[eventName]) {
    listeners[eventName] = []
  }

  const hasCallback = listeners[eventName].find(
    (listener) => listener === callback
  )

  console.log(`hasCallback: ${hasCallback}`)
  if (!hasCallback) {
    listeners[eventName].push(callback)
  }
}

export const unsubscribe = (
  eventName: string,
  callback: (data?: unknown) => void
) => {
  if (listeners[eventName]) {
    listeners[eventName].map((listener) => listener !== callback)
  }
}

export const publish = (eventName: string, data: unknown) => {
  if (listeners[eventName]) {
    listeners[eventName].forEach((listener) => listener(data))
  }
}
