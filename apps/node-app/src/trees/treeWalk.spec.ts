import { Tree } from './tree'
import { depthFirstBinaryWalk } from './depthFirstBinaryWalk'
import { breadthFirstBinaryWalk } from './breadthFirstBinaryWalk'
import { binaryTreeComparison } from './binaryTreeComparison'

const tree = new Tree<number>()
tree.addNode(10)
tree.addNode(5)
tree.addNode(15)
tree.addNode(2)
tree.addNode(7)
tree.addNode(9)
tree.addNode(8)
tree.addNode(10)

describe('treeWalk', () => {
  it('should walk the tree', () => {
    console.log(JSON.stringify(tree))
    expect(depthFirstBinaryWalk(tree.rootNode)).toEqual([
      10, 5, 2, 10, 7, 15, 9, 8,
    ])
  })

  it('should do breadth first walk', () => {
    expect(breadthFirstBinaryWalk(tree.rootNode)).toEqual([
      10, 5, 15, 2, 7, 9, 8, 10,
    ])
  })
  describe('Binary Tree Comparison', () => {
    const treeA = new Tree<number>()
    treeA.addNode(1)
    treeA.addNode(2)
    treeA.addNode(3)
    treeA.addNode(4)
    treeA.addNode(5)

    const treeB = new Tree<number>()
    treeB.addNode(1)
    treeB.addNode(2)
    treeB.addNode(3)
    treeB.addNode(4)
    treeB.addNode(5)

    const treeC = new Tree<number>()
    treeC.addNode(2)
    treeC.addNode(1)
    treeC.addNode(3)
    treeC.addNode(4)

    it('should do binary tree comparison successfully', () => {
      console.log(`Checking A: ${JSON.stringify(treeA)}`)
      console.log(`Checking B: ${JSON.stringify(treeB)}`)
      expect(binaryTreeComparison<number>(treeA.rootNode, treeB.rootNode)).toBe(
        true
      )
      expect(binaryTreeComparison<number>(treeA.rootNode, treeC.rootNode)).toBe(
        false
      )
    })
  })
})
