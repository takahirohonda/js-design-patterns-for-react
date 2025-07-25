const listeners: Record<string, ((data: unknown) => void)[]> = {}

export const publish = (eventName: string, data: unknown) => {
  const listenerArray = listeners[eventName]
  if (listenerArray && listenerArray.length > 0) {
    listenerArray.forEach((listener) => {
      listener(data)
    })
  }
}

export const subscribe = (eventName: string, listener: any) => {
  const listenerForEvent = listeners[eventName]
  if (!listenerForEvent) {
    listeners[eventName] = [listener]
    return
  }
  const hasAlreadySubscribed =
    listenerForEvent.filter((existingListener) => {
      return existingListener === listener
    }).length > 0
  if (hasAlreadySubscribed) {
    return
  }
  listenerForEvent.push(listener)
}

export const unsubscribe = (eventName: string, listener: any) => {
  const listenerForEvent = listeners[eventName]

  if (!listenerForEvent) {
    return
  }

  listeners[eventName] = listenerForEvent.filter((existingListener) => {
    return existingListener !== listener
  })
}

export const unsubscribeAll = (eventName: string) => {
  delete listeners[eventName]
}
