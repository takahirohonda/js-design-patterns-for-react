export const mostFrequentChar = (input: string) => {
  const charCounter: Record<string, number> = {}
  const charArray = input.toUpperCase().split('')
  const answer: string[] = []
  charArray.forEach((char) => {
    const count = charCounter[char]
    if (count === undefined || typeof count !== 'number') {
      charCounter[char] = 0
      answer.push(char)
    } else {
      const currentCount = charCounter[char]
      const incrementedCount = currentCount + 1
      const currentMaxNumber = charCounter[answer[0]]
      charCounter[char] = incrementedCount

      if (incrementedCount > currentMaxNumber) {
        const arrayLength = answer.length
        answer.splice(0, arrayLength)
        answer.push(char)
      } else if (
        incrementedCount === currentMaxNumber &&
        !answer.includes(char)
      ) {
        answer.push(char)
      }
    }
  })
  console.log(JSON.stringify(charCounter))
  return answer
}

describe('test', () => {
  it('should work', () => {
    expect(mostFrequentChar('AABBCCCDDDDEEFFFFF')).toEqual(['F'])
  })

  it('should work 2', () => {
    expect(mostFrequentChar('AABBCCCDDDDEEFFFF')).toEqual(['D', 'F'])
  })
})
