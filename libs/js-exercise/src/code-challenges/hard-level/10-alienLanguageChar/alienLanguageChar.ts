const insertAt = (array: string[], insertAt: number, elem: string) => {
  return [
    ...array.slice(0, insertAt),
    elem,
    ...array.slice(insertAt, array.length),
  ]
}

export const alienOrder = (wordlist: string[]) => {
  let orderedWord: string[] = []

  wordlist.forEach((word) => {
    const letterArr = word.split('')
    const previousLetterIndex = -1
    letterArr.forEach((letter) => {
      const currentLetterIndex = orderedWord.findIndex(
        (char) => char === letter
      )

      if (currentLetterIndex === -1 && previousLetterIndex === -1) {
        orderedWord.unshift(letter)
        return
      } else if (currentLetterIndex === -1 && previousLetterIndex >= 0) {
        const newArray = insertAt(orderedWord, previousLetterIndex + 1, letter)
        orderedWord = newArray
        return
      }
    })
  })

  return [...new Set(orderedWord)].join('')
}
