import { Tree } from './tree'
import { depthFirstBinarySearch } from './depthFirstBinarySearch'

const tree = new Tree<number>()

tree.addNode(10)
tree.addNode(5)
tree.addNode(15)
tree.addNode(2)
tree.addNode(7)

describe('treeWalk', () => {
  it('should walk the tree', () => {
    console.log(tree)
    expect(depthFirstBinarySearch(tree.rootNode)).toEqual([10, 5, 2, 7, 15])
  })
})
