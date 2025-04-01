import { BinarySearchTree } from './BinarySearchTree'
describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<number>

  beforeEach(() => {
    bst = new BinarySearchTree<number>()
  })

  test('should insert values correctly', () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(2)
    bst.insert(7)

    expect(bst.inorderTraversal()).toEqual([2, 5, 7, 10, 15])
  })

  test('should delete a leaf node correctly', () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(2)
    bst.insert(7)

    bst.delete(2) // Deleting a leaf node

    expect(bst.inorderTraversal()).toEqual([5, 7, 10, 15])
  })

  test('should delete a node with one child correctly', () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(2) // Left child of 5

    bst.delete(5) // Node with one child (2)

    expect(bst.inorderTraversal()).toEqual([2, 10, 15])
  })

  test('should delete a node with two children correctly', () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(2)
    bst.insert(7)
    bst.insert(12)
    bst.insert(17)

    bst.delete(10) // Root node with two children

    expect(bst.inorderTraversal()).toEqual([2, 5, 7, 12, 15, 17])
  })

  test('should handle deleting the root node', () => {
    bst.insert(10)
    bst.delete(10)

    expect(bst.inorderTraversal()).toEqual([])
  })

  test('should handle deleting from an empty tree', () => {
    bst.delete(10)

    expect(bst.inorderTraversal()).toEqual([])
  })
})
