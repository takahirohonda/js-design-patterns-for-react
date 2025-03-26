// Example using Map
function testMap() {
  let obj1 = { name: 'Object 1' }
  const obj2 = { name: 'Object 2' }

  const map = new Map()
  map.set(obj1, 'Data for Object 1')
  map.set(obj2, 'Data for Object 2')

  console.log('Map size before object deletion:', map.size) // 2

  // Remove the reference to obj1
  obj1 = null

  // obj1 is still in the map because Map holds strong references to keys
  console.log('Map size after object1 deletion (obj1 = null):', map.size) // 2
}

// Example using WeakMap
function testWeakMap() {
  let obj1 = { name: 'Object 1' }
  const obj2 = { name: 'Object 2' }

  const weakMap = new WeakMap()
  weakMap.set(obj1, 'Data for Object 1')
  weakMap.set(obj2, 'Data for Object 2')

  // not really sure how to check the weakMap size because it doesn't expose size...
  console.log('WeakMap size before object deletion:', weakMap) // Cannot check size directly

  // Remove the reference to obj1
  obj1 = null

  // obj1 is removed from weakMap automatically by garbage collection
  setTimeout(() => {
    console.log('WeakMap after object1 deletion (obj1 = null):', weakMap) // obj1 will be garbage collected and removed
  }, 1000) // Check after some time to ensure garbage collection occurs
}

console.log('Testing Map:')
testMap()

console.log('Testing WeakMap:')
testWeakMap()
