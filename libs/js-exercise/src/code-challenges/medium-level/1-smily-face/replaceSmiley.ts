/*
 * Convert all occurences of `:)` to `:(` and return the new string
 */

export const replaceSmily = (input: string) => {
  // Replace ALL occurrences of ':)' with ':(' using global regex
  return input.replace(/:\)/g, ':(')
}
