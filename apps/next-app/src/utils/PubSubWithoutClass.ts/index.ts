const listeners: Record<string, []>[] | [] = []

const subscribe = (eventName, callback) => {

  const event = listeners.map((listener) => listener[eventName])
  listeners.map((listener) => {

    if (listener[eventName])
  })
 
}
