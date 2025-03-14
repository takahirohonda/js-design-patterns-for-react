# Recursion

The key to write a recursion algorithm is:

(1) Find out base cases to stop the recursion.
(2) Find out the logic to recurse.

## Maze Solver

[
`##########E#`,
`# `,
`##S#########`,
]

<- # ->

**Base Case**

1. When it's a wall.
2. When it's off the map.
3. When it's the end.
4. If it goes to the tile where it's been.

**Recursive logic**

Try to go all the directions.
