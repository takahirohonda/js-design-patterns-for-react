const recursionSum = (n) => {
  if (n === 0) {
    console.log(`n in the if condition: ${n}`)
    return n
  }
  console.log(`current n is: ${n}`)
  return n + recursionSum(n - 1)
}

console.log(`the output of my recursion is: ${recursionSum(10)}`)
