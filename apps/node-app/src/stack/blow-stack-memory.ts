// Infinite recursion will cause: RangeError: Maximum call stack size exceeded
const recursiveFunction = () => {
  return recursiveFunction() // Infinite recursion
}

recursiveFunction()
