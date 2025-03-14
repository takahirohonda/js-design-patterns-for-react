/*
 *
 * # = Wall
 * S = Start
 * E = End
 * ' '= Walkable path
 * Using BFS (Breadth-First Search)
 */
function findPath(maze) {
  const numRows = maze.length
  const numCols = maze[0].length

  // Find start and end positions
  let start, end
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (maze[i][j] === 'S') start = [i, j]
      if (maze[i][j] === 'E') end = [i, j]
    }
  }

  if (!start || !end) return null

  // BFS setup
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ]

  const queue = [[start, [start]]] // Store path taken
  const visited = new Set()
  visited.add(start.toString())

  while (queue.length > 0) {
    const [[x, y], path] = queue.shift()

    if (x === end[0] && y === end[1]) return path // Found the exit

    for (const [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy

      if (
        nx >= 0 &&
        nx < numRows &&
        ny >= 0 &&
        ny < numCols &&
        maze[nx][ny] !== '#' &&
        !visited.has([nx, ny].toString())
      ) {
        visited.add([nx, ny].toString())
        queue.push([
          [nx, ny],
          [...path, [nx, ny]],
        ])
      }
    }
  }

  return null // No path found
}

// Example usage:
const maze = ['##########E#', '#          ', '##S#########']

const result = findPath(maze)
console.log(result)
