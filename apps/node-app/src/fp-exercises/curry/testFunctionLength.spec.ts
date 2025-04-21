describe('Test Function Length', () => {
  it('checking function.length -> it expects how many arguments the function expect', () => {
    const curry = (fn) => (x) => (y) => fn(x, y)

    // this function length is 2
    const add = (x, y) => x + y
    expect(add.length).toBe(2)

    const curriedAdd = curry(add)
    const add2 = (y) => curriedAdd(2)(y)
    expect(add2(5)).toBe(7)
    expect(add2.length).toBe(1)
  })

  it('checking ...args length', () => {
    const check = (...args) => {
      return args
    }
    // ...args makes argument into an array
    expect(check(1, 2, 3)).toEqual([1, 2, 3])
  })

  it('should curry function', () => {
    const curry: any = (fn) => {
      const curried = (...args: (typeof fn.arguments)[]) => {
        if (args.length >= fn.length) {
          return fn(...args)
        } else {
          return (...nextArgs: any[]) => curried(...args, ...nextArgs)
        }
      }
      return curried
    }

    const add = (x, y, z) => x + y + z

    const curried = curry(add)

    const xIs2 = curried(2)
    expect(xIs2(3, 4)).toBe(9)

    const xIs2YIs10 = xIs2(10)
    expect(xIs2YIs10(20)).toBe(32)
  })
})
