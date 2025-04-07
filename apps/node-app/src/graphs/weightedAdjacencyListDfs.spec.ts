import {
  weightedAdjacencyListDfs,
  WeightedAdjacencyList,
} from './weightedAdjacencyListDfs'

describe('weightedAdjacencyListDfs', () => {
  let graph: WeightedAdjacencyList

  beforeEach(() => {
    // Example graph (weighted)
    graph = [
      [
        [1, 2], // A -> B with weight 2
        [2, 3], // A -> C with weight 3
      ],
      [[3, 1]], // B -> D with weight 1
      [[3, 4]], // C -> D with weight 4
      [], // D has no outgoing edges
    ]
  })

  it('should find a valid path from A to D', () => {
    const result = weightedAdjacencyListDfs(graph, 0, 3) // A -> D
    expect(result).toEqual([0, 1, 3]) // Path: A -> B -> D
  })

  it('should find a valid path from A to C', () => {
    const result = weightedAdjacencyListDfs(graph, 0, 2) // A -> C
    expect(result).toEqual([0, 2]) // Path: A -> C
  })

  it('should return null if no path exists', () => {
    const result = weightedAdjacencyListDfs(graph, 3, 0) // D -> A (no path)
    expect(result).toBeNull()
  })

  it('should return the same node if the source and target are the same', () => {
    const result = weightedAdjacencyListDfs(graph, 0, 0) // A -> A (same node)
    expect(result).toEqual([0])
  })

  it('should return null if the target is not reachable from the source', () => {
    const disconnectedGraph: WeightedAdjacencyList = [
      [[1, 0]], // A -> B (no weight)
      [], // B has no outgoing edges
    ]
    const result = weightedAdjacencyListDfs(disconnectedGraph, 0, 1) // A -> B (no path)
    expect(result).toBeNull()
  })
})
