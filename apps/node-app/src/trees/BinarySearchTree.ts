/* Binary Search Tree (BST)
 *
 * The left subtree always contains smaller values.
 * The right subtree always contains larger values.
 * Supports insertion and deletion while maintaining BST properties.
 */

class BinaryNode<T> {
  value: T
  left: BinaryNode<T> | null = null
  right: BinaryNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

export class BinarySearchTree<T> {
  root: BinaryNode<T> | null = null

  insert(value: T): void {
    const newNode = new BinaryNode(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  delete(value: T): void {
    this.root = this._deleteNode(this.root, value)
  }

  private _deleteNode(
    node: BinaryNode<T> | null,
    value: T
  ): BinaryNode<T> | null {
    if (!node) return null

    if (value < node.value) {
      node.left = this._deleteNode(node.left, value)
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value)
    } else {
      // Case 1: No child
      if (!node.left && !node.right) return null

      // Case 2: One child
      if (!node.left) return node.right
      if (!node.right) return node.left

      // Case 3: Two children → Find the minimum value in the right subtree
      const minRight = this._findMin(node.right)
      node.value = minRight.value
      node.right = this._deleteNode(node.right, minRight.value)
    }

    return node
  }

  private _findMin(node: BinaryNode<T>): BinaryNode<T> {
    while (node.left) {
      node = node.left
    }
    return node
  }

  inorderTraversal(): T[] {
    const result: T[] = []
    this._inorderHelper(this.root, result)
    return result
  }

  private _inorderHelper(node: BinaryNode<T> | null, result: T[]): void {
    if (!node) return
    this._inorderHelper(node.left, result)
    result.push(node.value)
    this._inorderHelper(node.right, result)
  }
}
