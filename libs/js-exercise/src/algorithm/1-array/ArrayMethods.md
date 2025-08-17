# Get the first element from an array

1. Mutable

```js
const myArray = [10, 20, 30, 40, 50]

// Remove the first element
const firstElement = myArray.shift()

console.log(myArray) // Output: [20, 30, 40, 50]
console.log(firstElement) // Output: 10
```

```js
const myArray = [10, 20, 30, 40, 50]
myArray.splice(0, 1)
console.log(myArray) // Output: [20, 30, 40, 50]
```

2. Immutable

Can use slice or use destructing assignment with the rest operator (`...`).

# Get the last element from an array

```js
const arr = ['apple', 'banana', 'cherry']
const lastElement = arr[arr.length - 1]
console.log(lastElement) // Output: "cherry"
```

```js
const arr = ['apple', 'banana', 'cherry']
const lastElement = arr.at(-1)
console.log(lastElement) // Output: "cherry"
```

```js
const arr = ['apple', 'banana', 'cherry']
const lastElement = arr.pop()
console.log(lastElement) // Output: "cherry"
console.log(arr) // Output: ["apple", "banana"] (original array modified)
```
