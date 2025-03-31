import { Tree } from './tree'
import { preOrderSearch } from './treeWalk'

const tree = new Tree<number>()

tree.addNode(10)
tree.addNode(5)
tree.addNode(15)
tree.addNode(2)
tree.addNode(7)

console.log(preOrderSearch(tree.rootNode))
