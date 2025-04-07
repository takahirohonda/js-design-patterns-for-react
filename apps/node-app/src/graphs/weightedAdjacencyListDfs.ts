export type WeightedAdjacencyList = Array<Array<[number, number]>>

export const weightedAdjacencyListDfs = (
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null => {
  const seen = new Array(graph.length).fill(false)
  const path: number[] = []

  const dfs = (node: number): boolean => {
    // If we found the needle, return true
    if (node === needle) {
      path.push(node) // Record the node in the path
      return true
    }

    seen[node] = true

    for (const [neighbor, _weight] of graph[node]) {
      if (!seen[neighbor]) {
        if (dfs(neighbor)) {
          path.push(node) // Add current node to the path if we find the target
          return true
        }
      }
    }

    return false
  }

  if (dfs(source)) {
    return path.reverse() // Reverse the path to get the correct order
  }

  return null // Return null if no path was found
}
