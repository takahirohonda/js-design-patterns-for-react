type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

export class Tree<T> {
  rootNode?: BinaryNode<T>
  nodeCount: number

  constructor() {
    this.nodeCount = 0
  }

  addNode(value: T) {
    const newNode: BinaryNode<T> = { value }

    if (!this.rootNode) {
      this.rootNode = newNode
      this.nodeCount += 1
      return
    }

    this.insertNode(this.rootNode, newNode)
    this.nodeCount += 1
  }

  private insertNode(current: BinaryNode<T>, newNode: BinaryNode<T>) {
    // This makes it a binary search tree
    if (newNode.value < current.value) {
      if (!current.left) {
        current.left = newNode
      } else {
        this.insertNode(current.left, newNode)
      }
    } else {
      if (!current.right) {
        current.right = newNode
      } else {
        this.insertNode(current.right, newNode)
      }
    }
  }
}
