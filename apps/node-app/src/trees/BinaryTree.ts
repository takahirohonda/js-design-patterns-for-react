type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

export class BinaryTree<T> {
  node: BinaryNode<T>

  insert(node: BinaryNode<T>) {
    // to be updated
  }
}
