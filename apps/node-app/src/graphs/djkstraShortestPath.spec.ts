import {
  dijkstraShortestPath,
  WeightedAdjacencyList,
} from './dijkstraShortestPath'

describe('dijkstraShortestPath', () => {
  let graph: WeightedAdjacencyList

  beforeEach(() => {
    // Example graph (weighted)
    graph = [
      [
        [1, 2], // Node 0 -> Node 1 (weight 2)
        [2, 3], // Node 0 -> Node 2 (weight 3)
      ],
      [
        [3, 1], // Node 1 -> Node 3 (weight 1)
      ],
      [
        [3, 4], // Node 2 -> Node 3 (weight 4)
      ],
      [], // Node 3 has no outgoing edges
    ]
  })

  it('should return the correct shortest path distances from the source node', () => {
    const result = dijkstraShortestPath(graph, 0)
    expect(result).toEqual([0, 2, 3, 3]) // Shortest distances from node 0 to all nodes
  })

  it('should return 0 for the distance from the source node to itself', () => {
    const result = dijkstraShortestPath(graph, 0)
    expect(result[0]).toBe(0) // Distance from node 0 to itself should be 0
  })

  it('should return the correct shortest path distances for a disconnected graph', () => {
    const disconnectedGraph: WeightedAdjacencyList = [
      [[1, 2]], // Node 0 -> Node 1 (weight 2)
      [], // Node 1 has no outgoing edges
    ]

    const result = dijkstraShortestPath(disconnectedGraph, 0)
    expect(result).toEqual([0, 2]) // Shortest distance from node 0 to node 1 is 2
  })

  it('should return Infinity for unreachable nodes', () => {
    const disconnectedGraph: WeightedAdjacencyList = [
      [[1, 2]], // Node 0 -> Node 1 (weight 2)
      [], // Node 1 has no outgoing edges
      [], // Node 2 has no outgoing edges
    ]

    const result = dijkstraShortestPath(disconnectedGraph, 0)
    expect(result[2]).toBe(Infinity) // Node 2 is unreachable from node 0
  })

  it('should return correct distances in a graph with multiple paths', () => {
    const graphWithMultiplePaths: WeightedAdjacencyList = [
      [
        [1, 2], // Node 0 -> Node 1 (weight 2)
        [2, 4], // Node 0 -> Node 2 (weight 4)
      ],
      [
        [2, 1], // Node 1 -> Node 2 (weight 1)
        [3, 5], // Node 1 -> Node 3 (weight 5)
      ],
      [
        [3, 1], // Node 2 -> Node 3 (weight 1)
      ],
      [], // Node 3 has no outgoing edges
    ]

    const result = dijkstraShortestPath(graphWithMultiplePaths, 0)
    expect(result).toEqual([0, 2, 3, 7]) // The shortest distances from node 0 to other nodes
    // Node 0 -> Node 1 -> Node 2 -> Node 3 is the shortest path
  })
})
