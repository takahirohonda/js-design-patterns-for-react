import { MinHeap } from './MinHeap' // Adjust the path as needed

describe('MinHeap', () => {
  let heap: MinHeap

  beforeEach(() => {
    heap = new MinHeap()
  })

  test('should initialize an empty heap', () => {
    expect(heap.length).toBe(0)
    expect(heap.peek()).toBeNull()
  })

  test('should insert elements and maintain min-heap property', () => {
    heap.insert(50)
    heap.insert(71)
    heap.insert(100)
    heap.insert(101)
    heap.insert(80)
    heap.insert(200)
    heap.insert(108)

    expect(heap.peek()).toBe(50) // Min element should be at the root
    expect(heap.length).toBe(7)
  })

  test('should delete the minimum element and maintain heap order', () => {
    heap.insert(50)
    heap.insert(71)
    heap.insert(100)
    heap.insert(101)
    heap.insert(80)
    heap.insert(200)
    heap.insert(108)

    expect(heap.delete()).toBe(50)
    expect(heap.peek()).toBe(71) // Next smallest element
    expect(heap.length).toBe(6)

    expect(heap.delete()).toBe(71)
    expect(heap.peek()).toBe(80)
    expect(heap.length).toBe(5)
  })

  test('should return null when deleting from an empty heap', () => {
    expect(heap.delete()).toBeNull()
  })

  test('should handle single element deletion correctly', () => {
    heap.insert(42)
    expect(heap.delete()).toBe(42)
    expect(heap.peek()).toBeNull()
    expect(heap.length).toBe(0)
  })
})
