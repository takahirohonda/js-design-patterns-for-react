import DoublyLinkedList from './DoublyLinkedList'

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<number>

  beforeEach(() => {
    list = new DoublyLinkedList<number>()
  })

  test('should initialize an empty list', () => {
    expect(list.length).toBe(0)
    expect(list.get(0)).toBeUndefined()
  })

  test('should append items to the list', () => {
    list.append(10)
    list.append(20)
    expect(list.length).toBe(2)
    expect(list.get(0)).toBe(10)
    expect(list.get(1)).toBe(20)
  })

  test('should prepend items to the list', () => {
    list.prepend(10)
    list.prepend(5)
    expect(list.length).toBe(2)
    expect(list.get(0)).toBe(5)
    expect(list.get(1)).toBe(10)
  })

  test('should insert items at specific index', () => {
    list.append(10)
    list.append(20)
    list.insertAt(15, 1) // Insert 15 at index 1
    expect(list.length).toBe(3)
    expect(list.get(0)).toBe(10)
    expect(list.get(1)).toBe(15)
    expect(list.get(2)).toBe(20)
  })

  test('should throw error when inserting at invalid index', () => {
    expect(() => list.insertAt(10, -1)).toThrow('Index out of bounds')
    expect(() => list.insertAt(10, 1)).toThrow('Index out of bounds')
  })

  test('should remove items by value', () => {
    list.append(10)
    list.append(20)
    list.append(30)
    expect(list.remove(20)).toBe(20)
    expect(list.length).toBe(2)
    expect(list.get(0)).toBe(10)
    expect(list.get(1)).toBe(30)
  })

  test('should remove items by index', () => {
    list.append(10)
    list.append(20)
    list.append(30)
    expect(list.removeAt(1)).toBe(20) // Remove the item at index 1
    expect(list.length).toBe(2)
    expect(list.get(0)).toBe(10)
    expect(list.get(1)).toBe(30)
  })

  test('should handle removing an item that does not exist', () => {
    list.append(10)
    expect(list.remove(20)).toBeUndefined()
    expect(list.length).toBe(1)
  })

  test('should return undefined when trying to remove or get from empty list', () => {
    expect(list.remove(10)).toBeUndefined()
    expect(list.get(0)).toBeUndefined()
    expect(list.removeAt(0)).toBeUndefined()
  })

  test('should remove the first item when removeAt(0) is called', () => {
    list.append(10)
    list.append(20)
    expect(list.removeAt(0)).toBe(10) // Remove first item
    expect(list.length).toBe(1)
    expect(list.get(0)).toBe(20)
  })

  test('should remove the last item when removeAt(length - 1) is called', () => {
    list.append(10)
    list.append(20)
    expect(list.removeAt(1)).toBe(20) // Remove last item
    expect(list.length).toBe(1)
    expect(list.get(0)).toBe(10)
  })
})
