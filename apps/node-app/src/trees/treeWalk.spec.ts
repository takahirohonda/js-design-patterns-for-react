import { Tree } from './tree'
import { depthFirstBinaryWalk } from './depthFirstBinaryWalk'
import { breadthFirstBinaryWalk } from './breadthFirstBinaryWalk'

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
})
