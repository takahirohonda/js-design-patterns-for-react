export type WeightedAdjacencyList = Array<Array<[number, number]>>

export const dijkstraShortestPath = (
  graph: WeightedAdjacencyList,
  source: number
): number[] => {
  const distances = new Array(graph.length).fill(Infinity) // Distance to each node from the source
  distances[source] = 0 // Distance to the source node is 0
  const visited = new Array(graph.length).fill(false) // To track visited nodes
  const priorityQueue: [number, number][] = [[source, 0]] // Min-heap: [node, distance]

  while (priorityQueue.length > 0) {
    // Pop the node with the smallest distance from the queue
    const [currentNode, currentDistance] = priorityQueue.shift()! // Shift instead of pop for better queue behavior

    if (visited[currentNode]) continue
    visited[currentNode] = true

    // Iterate over the neighbors of the current node
    for (const [neighbor, weight] of graph[currentNode]) {
      if (visited[neighbor]) continue

      const newDistance = currentDistance + weight
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance
        // Push the neighbor with the updated distance to the priority queue
        priorityQueue.push([neighbor, newDistance])
        // Sort the priority queue by the distance to ensure we always process the node with the smallest distance
        priorityQueue.sort((a, b) => a[1] - b[1])
      }
    }
  }

  return distances // Return the shortest distances from the source node to all other nodes
}
