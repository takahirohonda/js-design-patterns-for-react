# 1. Arrays

- Java arrays are a contiguous memory block and similar to C arrays. That's why size has to be fixed.

- The size cannot be changed once it's allocated. You need to reassign the variable to a new array if you want a different size.

```java
int[] arr = new int[5];
```

- It can have primitive or reference type

```java
int[] nums = new int[3];
String[] names = new String[3];
```

Use `ArrayList` if you need to use JS equivalent.

| Feature             | Java Array     | Java List (`ArrayList`) | JavaScript Array   |
| ------------------- | -------------- | ----------------------- | ------------------ |
| Size                | Fixed          | Dynamic                 | Dynamic            |
| Type safety         | Yes (typed)    | Yes (generic types)     | No (mixed types)   |
| Add/remove elements | ❌             | ✅ (`add`, `remove`)    | ✅ (`push`, `pop`) |
| Syntax              | `arr[i]`       | `list.get(i)`           | `arr[i]`           |
| Memory allocation   | Manual (fixed) | Automatic               | Automatic          |

Java Array ↔ JS ArrayBuffer + TypedArray

```js
// Allocate 8 bytes of memory
const buffer = new ArrayBuffer(8)
const view = new Int32Array(buffer)

view[0] = 42
console.log(view[0])
```

## Copying array

1. Shallow copy <- the website says this is a shallow copy, but actually this is reference assignment... Incorrect usage of the term? (https://www.programiz.com/java-programming/copy-arrays)

```java
int [] numbers = {1, 2, 3, 4, 5}
// this is a shallow copy. both point to the same memory location.
int [] copiedNumbers = numbers
```

2. Deep copy

- use for loop to add all the values to the new array.
- Use `arraycopy()` or `copyOfRange()`.

# Shallow vs Deep copy

| Term                     | What Happens                  | Memory Effect                                          |
| ------------------------ | ----------------------------- | ------------------------------------------------------ |
| **Reference assignment** | `arr2 = arr`                  | 🔗 Both variables point to the same array              |
| **Shallow copy**         | `arr2 = [...arr]`             | 🆕 New top-level array, but inner objects still shared |
| **Deep copy**            | `arr2 = structuredClone(arr)` | 🧬 Fully independent copy (recursively cloned)         |

🔸 “Two variables pointing to the same object” → same reference, not shallow copy.
🔸 “Two separate objects, but sharing inner references” → shallow copy.
