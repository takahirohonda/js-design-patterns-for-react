# Instructions

In ginortS sort, sort all characters in following order:

- Lowercase letters are sorted first.
- Followed by uppercase letters.
- Then, odd digits.
- Finally, even digits.
- Concatenate the sorted categories in the order: lowercase letters, uppercase letters, odd digits, even digits.

For example, consider the string "HelloWorld1234". Let's apply ginortS sort,

Lowercase letters: Sorted as "dellloor"
Uppercase letters: Sorted as "HW"
Odd digits: Sorted as "13"
Even digits: Sorted as "24"
Hence, our output would be "dellloorHW1324".

Return a new string by sorting it according to the ginortS order.

Example
For this input

input = "Sorting4321"
the result should be:

"ginortS1324"
Reason: After sorting the input string "Sorting4321" according to the specified order, we get "ginortS1324".

## Some alternative solutions

1. using loop to avoid repeated filtering.

```ts
export const ginortSOrder = (input: string) => {
  const lower: string[] = []
  const upper: string[] = []
  const odd: string[] = []
  const even: string[] = []

  for (const ch of input) {
    if (ch >= 'a' && ch <= 'z') {
      lower.push(ch)
    } else if (ch >= 'A' && ch <= 'Z') {
      upper.push(ch)
    } else if (/\d/.test(ch)) {
      const n = parseInt(ch)
      if (n % 2 === 0) even.push(ch)
      else odd.push(ch)
    }
  }

  return [...lower.sort(), ...upper.sort(), ...odd.sort(), ...even.sort()].join(
    ''
  )
}
```

## One liner with custom sort logic

```ts
export const ginortSOrder = (input: string) =>
  input
    .split('')
    .sort((a, b) => classify(a) - classify(b) || a.localeCompare(b))
    .join('')

const classify = (ch: string) => {
  if (/[a-z]/.test(ch)) return 0
  if (/[A-Z]/.test(ch)) return 1
  if (/[13579]/.test(ch)) return 2
  if (/[02468]/.test(ch)) return 3
  return 4 // fallback if needed
}
```

## Functional grouping with reduce

```ts
export const ginortSOrder = (input: string) => {
  const groups = input.split('').reduce(
    (acc, ch) => {
      if (/[a-z]/.test(ch)) acc[0].push(ch)
      else if (/[A-Z]/.test(ch)) acc[1].push(ch)
      else if (/[13579]/.test(ch)) acc[2].push(ch)
      else if (/[02468]/.test(ch)) acc[3].push(ch)
      return acc
    },
    [[], [], [], []] as string[][]
  )

  return groups.map((g) => g.sort().join('')).join('')
}
```

# Comparing three methods above

| Method              | Performance | Readability      | Regex-Free    | One-Liner |
| ------------------- | ----------- | ---------------- | ------------- | --------- |
| Classification loop | ✅ Fast     | ✅ Clear         | ✅ Yes        | ❌ No     |
| Custom sort         | ⚠️ Slower   | ⚠️ Less readable | ❌ Uses regex | ✅ Yes    |
| Reduce grouping     | ✅ Good     | ✅ Clear         | ❌ Uses regex | ❌ No     |
