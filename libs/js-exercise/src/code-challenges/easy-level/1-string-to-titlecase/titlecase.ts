/*
 * Convert string to title case
 */
export const stringToTitleCase = (str: string) => {
  // to be implemented

  const array = str.split(' ').map((word) => {
    const tempWord = word
    return word.replace(tempWord.charAt(0), tempWord.charAt(0).toUpperCase())
  })

  return array.join(' ')
}
