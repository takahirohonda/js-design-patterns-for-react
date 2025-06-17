interface ListenerData {
  eventName: string
  listeners: any[]
}

const listeners: ListenerData[] = []

export const publish = (eventName: string) => {
  listeners.forEach((list) => {
    if (list.eventName === eventName) {
      const listenerArray = list.listeners
      if (listenerArray.length > 0) {
        listenerArray.forEach((listener) => {
          listener()
        })
      }
    }
  })
}

export const subscribe = (eventName: string, listener: any) => {
  const eventListeners = listeners.filter(
    (list) => list.eventName === eventName
  )
  if (eventListeners) {
    eventListeners[0].listeners.push(listener)
  } else {
    listeners.push({
      eventName,
      listeners,
    })
  }
}
