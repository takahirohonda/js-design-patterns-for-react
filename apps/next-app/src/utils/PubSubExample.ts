/* eslint-disable @typescript-eslint/no-unsafe-function-type */

export class PubSubExample {
  private listeners: Record<string, Function[]> = {}

  subscribe(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
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
