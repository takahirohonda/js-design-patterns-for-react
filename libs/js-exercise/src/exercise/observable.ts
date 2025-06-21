interface User {
  name: string
  age: number
}

export const createObservable = (object: User) => {
  const handler = {
    set: (obj: User, prop: keyof User, value: string | number) => {
      console.log(`updated prop is: ${prop}`)
      console.log(`updated value is: ${value}`)
      if (prop === 'age' && typeof value === 'number' && value < 0) {
        console.error(`Cannot be updated`)
        return true
      }

      return Reflect.set(obj, prop, value)
    },
  }

  return new Proxy(object, handler)
}
