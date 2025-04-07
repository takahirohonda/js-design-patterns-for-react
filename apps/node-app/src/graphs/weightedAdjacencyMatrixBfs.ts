export type WeightedAdjacencyMatrix = number[][]

export const weightedAdjacencyMatrixBfs = (
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] | null => {
  // Special case: If source and target are the same
  if (source === needle) {
    return [source]
  }

  const seen = new Array(graph.length).fill(false)
  const prev = new Array(graph.length).fill(-1)

  seen[source] = true
  const q: number[] = [source]

  // Perform BFS
  do {
    const curr = q.shift() as number

    // If the target node (needle) is found, stop the traversal
    if (curr === needle) {
      break
    }

    const adjs = graph[curr]
    for (let i = 0; i < graph.length; ++i) {
      // Skip the zero-weighted edges and already visited nodes
      if (adjs[i] === 0 || seen[i]) {
        continue
      }

      seen[i] = true
      prev[i] = curr
      q.push(i)
    }
  } while (q.length)

  // Reconstruct the path from the source to the needle
  let curr = needle
  const out: number[] = []

  // Rebuild the path from needle to source by backtracking through the `prev` array
  while (prev[curr] !== -1) {
    out.push(curr)
    curr = prev[curr]
  }

  // Include the source node in the path if there's a valid path
  if (out.length || source === needle) {
    out.push(source)
    return out.reverse()
  }

  return null // Return null if no path exists
}
