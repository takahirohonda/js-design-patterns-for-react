## Instructions

The password strength is evaluated based on the criteria below:

Strong Password:

At least 8 characters.
At least one digit.
At least one lowercase letter.
At least one uppercase letter.
At least one special character.
For example, "StrongPwd1!" is a string password.

Medium Password:

At least 6 characters.
At least one digit.
Either one lowercase or uppercase letter.
For example, "Passpass123" is a medium password.

Weak Password:

The password does not meet the criteria for either a strong or medium password.
For example, "weakpwd" is a weak password.

Given a string password, return "Strong" if it's a strong password, "Medium" if medium, and "Weak" if it is weak.

Example
For this input

password = "Passw0rd!"
the result should be:

"Strong"
Reason: The string "Passw0rd!" has more than 8 characters and includes at least one digit(0), one lowercase letter 'a', one uppercase letter 'P' and one special character '!'.

## My initial solution with feedback...

**Summary of things to improve**

- Use `.test()` instead of `.match()`
- Regex can be better.
- My regex for special character only covers subset.

```ts
export const checkPasswordStrength = (password: string) => {
  const charLength = password.length
  const hasLowerUpperCaseLetters =
    // + is one or more occurrences. This means we can remove +
    // using .test() is better than .match()
    password.match(/[A-Z]+/i) && password.match(/[a-z]+/)
  // we can do /\d/ for digits
  const hasDigit = password.match(/[0-9]+/)
  const isStrong =
    charLength >= 8 &&
    hasLowerUpperCaseLetters &&
    hasDigit &&
    // this only covers subset of special characters,
    // the better one is [^A-Za-z0-9]
    password.match(/[@#$%^&*!]+/)

  const isMedium = charLength >= 6 && hasLowerUpperCaseLetters && hasDigit

  if (isStrong) {
    return 'Strong'
  } else if (isMedium) {
    return 'Medium'
  }
  return 'Weak'
}
```

# why is it better to use .test() compared to .match()?

🔺 .match()

- Return either null or an array of matches

```ts
'Hello123'.match(/[0-9]+/) // → ["123"]
```

✅ .test()

- Returns true or false, much cleaner.

```ts
const test = /[0-9]+/.test('Hello123') // true
const test2 = /[0-9]+/.test('Hello') // false
```

🔹 Alternative Approaches - I think regex approach is the best.

1. Scoring System

Instead of strict Strong/Medium/Weak rules, assign points:

+1 for having lowercase

+1 for having uppercase

+1 for having digits

+1 for special characters

+1 if length ≥ 8, etc.
