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

  const indexToRemove = listenerForEvent.indexOf(listener)
  if (indexToRemove > -1) {
    listenerForEvent.splice(indexToRemove, 1)
  }

  if (listenerForEvent.length === 0) {
    delete listeners[eventName]
  }
}

export const unsubscribeAll = (eventName: string) => {
  delete listeners[eventName]
}

const observer = Symbol('observer')
const makeObservable = (object) => {
  object[observer] = []
  object.observe = (callback) => {
    object[observer].push(callback)
  }
  return new Proxy(object, {
    set: (target, key, value, receiver) => {
      const success = Reflect.set(target, key, value, receiver)
    },
  })
}
