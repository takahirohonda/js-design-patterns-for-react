export const insertDuplicateObject = () => {
  const map = new Map()
  map.set('1', { name: 'me', dob: '2000-01-01' })

  map.set('1', { name: 'me', dob: '2000-01-01' })
  // map.set('2', { name: 'me', dob: '2000-01-01' })
  return map
}

export const dedupeObjectWithMap = () => {
  const array = [
    { name: 'me', dob: '2000-01-01' },
    { name: 'me', dob: '2000-01-01' },
  ]
  const map = new Map(array)
  return map
}

export const createMapFromArray = () => {
  const arr = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]
  const map = new Map(arr)

  const arr2 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

  const map2 = new Map(arr2.map((item) => [item.id, item.name]))

  console.log(map2.get(1))
}
