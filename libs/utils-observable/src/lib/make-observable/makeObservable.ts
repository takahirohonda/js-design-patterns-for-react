// We use a Symbol here to create a unique, non-enumerable property key for storing observers on the target object.
// This prevents accidental name collisions with existing or future properties on the target object.
const observers = Symbol('observers')

export const makeObservable = (target: any) => {
  target[observers] = []
  target.observe = (callback: any) => {
    target[observers].push(callback)
  }
  return new Proxy(target, {
    set: (target, key, value, receiver) => {
      const success = Reflect.set(target, key, value, receiver)
      if (success) {
        target[observers].forEach((callback: any) => {
          callback(key, value)
        })
      }
      return success
    },
  })
}
