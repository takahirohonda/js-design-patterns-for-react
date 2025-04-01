type BinaryNode<T> = {
  value: T
  left?: BinaryNode<T>
  right?: BinaryNode<T>
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

  private insertNode(root: BinaryNode<T>, newNode: BinaryNode<T>) {
    const queue: BinaryNode<T>[] = [root]

    while (queue.length > 0) {
      const current = queue.shift()!

      // Insert on the left if available
      if (!current.left) {
        current.left = newNode
        return
      }
      queue.push(current.left)

      // Insert on the right if available
      if (!current.right) {
        current.right = newNode
        return
      }
      queue.push(current.right)
    }
  }
}
