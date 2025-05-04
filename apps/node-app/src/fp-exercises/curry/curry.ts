type FunctionWith2Args = (x: any, y: any) => any

const curryWith2ArgumentsFn = (fn: FunctionWith2Args) => (x) => (y) => fn(x, y)

export function curryWith2ArgumentsFnWithoutArrow(fn) {
  return function (x) {
    return function (y) {
      fn(x, y)
    }
  }
}

export const splitWithSpace = curryWith2ArgumentsFn((delimiter, string) =>
  string.split(delimiter)
)

export const curryWithTypingAttempt = <T extends (...args: any[]) => any>(
  fn: T
) => {
  const curried = (...args: Parameters<T> | any): ReturnType<T> | any => {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...nextArgs: Parameters<T>) => curried(...args, ...nextArgs)
    }
  }
  return curried
}

const add = (a: number, b: number, c: number) => a + b + c
const curriedAdd = curryWithTypingAttempt(add)

curriedAdd(1)(2)(3) // ✅ Works
curriedAdd(1, 2)(3) // ✅ Works
curriedAdd(1, 2, 3) // ✅ Works
