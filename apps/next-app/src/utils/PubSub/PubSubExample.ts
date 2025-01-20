/* eslint-disable @typescript-eslint/no-unsafe-function-type */

export class PubSubExample {
  // listeners are the message broker, can be named as subscribers
  private listeners: Record<string, Function[]> = {}

  subscribe(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  unsubscribe(event: string, callback: Function) {
    if (!this.listeners[event]) {
      return
    }

    return this.listeners[event].filter((listener) => listener !== callback)
  }

  publish(event: string, data: unknown) {
    const callbacks = this.listeners[event]
    if (!callbacks) {
      return
    }
    callbacks.forEach((callback) => {
      callback(data)
    })
  }
}
