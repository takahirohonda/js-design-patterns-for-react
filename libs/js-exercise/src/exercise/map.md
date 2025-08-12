# Deduping with Map

1. Deduplicate a simple array of primitive values

```ts
const arr = [1, 2, 2, 3, 1]
const map = new Map(arr.map((item) => [item, true]))
const deduped = [...map.keys()]

console.log(deduped)
```

2. Deduplicate array of objects by a property

```ts
const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice again' },
]

// Use Map to keep only the last occurrence by `id`
const deduped = [...new Map(arr.map((item) => [item.id, item])).values()]

console.log(deduped)
// [
//   { id: 2, name: 'Bob' },
//   { id: 1, name: 'Alice again' }
// ]
```

# Create Map object

1. From an array of `[key, value]` pairs

```ts
const arr = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
]
const map = new Map(arr)

console.log(map.get('a')) // 1
```

2. From an array of objects

```ts
const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]

const map = new Map(arr.map((item) => [item.id, item.name]))

console.log(map.get(1))
```

3. Using forEach to build a Map manually

```ts
const arr = ['x', 'y', 'z']
const map = new Map()

arr.forEach((value, index) => {
  map.set(index, value)
})

console.log(map.get(1)) // 'y'
```
