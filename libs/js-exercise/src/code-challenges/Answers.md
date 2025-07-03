## 1. Basic

1. Reverse the string

```js
const string = 'hello'

string2.split('').reverse().join('')
```

`String.split('')` creates an array of letters.

2. Palindrome test

```js
const palindrome = (str1, str2) => {
  const str1Reversed = str1.split('').reverse().join('')
  return str1Reversed.toLowerCase() === str2.toLowerCase()
}

const str1 = 'Ahmed'
const str2 = 'demha'
console.log(palindrome(str1, str2)) // Output: true
```

3. Find the most frequently occurring character

```js
// example answer
function mostFrequentChar(str) {
  const charCount = {}
  let maxChar = '',
    maxCount = 0

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1
    if (charCount[char] > maxCount) {
      maxChar = char
      maxCount = charCount[char]
    }
  }
  return maxChar
}

const input = 'ABBAAdBd5BBB'
console.log(mostFrequentChar(input)) // Output: 'B'
```
