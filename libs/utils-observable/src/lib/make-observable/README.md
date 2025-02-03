# Make Observable

Create a function makeObservable(target) that “makes the object observable” by returning a proxy (https://javascript.info/task/observable)

```ts
function makeObservable(target) {
  /* your code */
}

let user = {}
user = makeObservable(user)

user.observe((key, value) => {
  alert(`SET ${key}=${value}`)
})

user.name = 'John' // alerts: SET name=John
```

**Hint**

You'll need to create a Proxy that intercepts property assignments on the target object. Specifically, you should:

Store a list of observer functions that will be notified when a property is changed.
Use the set trap of the Proxy to detect changes and call the observer functions.
Think about how you can add a method like observe(callback) to user, so that you can register callbacks for property updates. You might need to use a Symbol or Object.defineProperty to store the observers without interfering with normal properties.

## What is Proxy?

`Proxy` is a special JS object that wraps another object and allows you to intercept and customize operations performed on that object, such as getting, setting, or deleting properties.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

```js
// This is the API
const proxy = new Proxy(target, handler)
```

```ts
const obj = {}
const proxy = new Proxy(obj, {
  set(target, key, value) {
    target[key] = value
    console.log(`Observed setter call with ${key}: ${value}`)
    return true
  },
})

proxy.name = 'Me'
```

# Answer

First iteration

```ts
export const makeObservable = (target: any) => {
  const callbackFunctions: any = []
  target.observe = (callback: any) => {
    callbackFunctions.push(callback)
  }
  return new Proxy(target, {
    set: (target, key, value) => {
      target[key] = value
      callbackFunctions.forEach((callback: any) => {
        callback(key, value)
      })
      return true
    },
  })
}
```

Better to use `Symbol` and the object itself should have an array of callback. Why use a Symbol?

- Prevents name conflicts (e.g. in case the user sets user.observables)
- Keeps it hidden from `Object.keys(user)`

A slight improvement

```ts
const observersSymbol = Symbol('observers')

export const makeObservable = (target: any) => {
  target[observersSymbol] = []

  target.observe = (callback: (key: string, value: any) => void) => {
    target[observersSymbol].push(callback)
  }

  return new Proxy(target, {
    set: (target, key, value) => {
      target[key] = value
      target[observersSymbol].forEach((callback: any) => {
        callback(key, value)
      })
      return true
    },
  })
}
```

Final answer

```ts
const observersSymbol = Symbol('observers')

export const makeObservable = <T extends object>(target: T): T => {
  ;(target as any)[observersSymbol] = []
  ;(target as any).observe = (callback: (key: string, value: any) => void) => {
    ;(target as any)[observersSymbol].push(callback)
  }

  return new Proxy(target, {
    set: (target, key, value, receiver) => {
      const success = Reflect.set(target, key, value, receiver)

      if (success && key !== observersSymbol) {
        ;(target as any)[observersSymbol].forEach(
          (callback: (key: string, value: any) => void) =>
            callback(key as string, value)
        )
      }

      return success
    },
  })
}
```

Answer from the website: https://javascript.info/task/observable

```js
let handlers = Symbol('handlers')

function makeObservable(target) {
  // 1. Initialize handlers store
  target[handlers] = []

  // Store the handler function in array for future calls
  target.observe = function (handler) {
    this[handlers].push(handler)
  }

  // 2. Create a proxy to handle changes
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments) // forward the operation to object
      if (success) {
        // if there were no error while setting the property
        // call all handlers
        target[handlers].forEach((handler) => handler(property, value))
      }
      return success
    },
  })
}
```
