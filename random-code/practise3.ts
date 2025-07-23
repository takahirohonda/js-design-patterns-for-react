const palindrome = (str1: string, str2: string) => {
  const reversedStr1 = str1.split('').reverse().join('').toLowerCase()
  return reversedStr1 === str2.toLowerCase()
}

export const mostFrequentChar = (input: string) => {
  const charCounter = {}
  const charArray = input.toUpperCase().split('')
  const answer: string[] = []
  const charArrayLength = charArray.length
  if (charArrayLength === 0) {
    return undefined
  }

  if (charArrayLength === 1) {
    return charArray
  }
  charArray.forEach((char) => {
    const count = charCounter[char]
    const currentMax = charCounter[answer[0]]
    if (count === undefined || typeof count !== 'number') {
      charCounter[char] = 1
    } else {
      const incrementedCount = count + 1

      charCounter[char] = incrementedCount
      if (incrementedCount > currentMax) {
        answer.splice(0, answer.length)
      } else if (incrementedCount === currentMax) {
        answer.push(char)
      }
    }
  })

  return answer
}
