const listeners: ((data: unknown) => void)[] = []

export const subscribe = (listener: (data: unknown) => void): void => {
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
