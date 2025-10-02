/*
 * Convert string to title case
 */
export const stringToTitleCase = (str: string) => {
  // to be implemented

  const array = str.split(' ').map((word) => {
    if (!word.includes('-')) {
      return capitalise(word)
    } else {
      return word
        .split('-')
        .map((word) => {
          return capitalise(word)
        })
        .join('-')
    }
  })

  return array.join(' ')
}

function capitalise(str: string) {
  return (
    str.substring(0, 1).toUpperCase() +
    str.substring(1, str.length).toLowerCase()
  )
}
