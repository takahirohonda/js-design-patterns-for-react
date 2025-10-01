Write a function to return a 2D matrix in spiral order.
JS
Difficulty: Hard
Challenge XP: 60
Instructions
The spiral order starts from the top-left corner and circles around the matrix clockwise until all elements are listed.

Consider a 2D matrix (array of arrays):

matrix = [[22, 20, 25, 18],
          [33, 7, 11, 14],
          [31, 29, 16, 5],
          [24, 35, 10, 12]]

The elements in spiral order would be 22, 20, 25, 18, 14, 5, 12, 10, 35, 24, 31, 33, 7, 11, 16, 29.

Given a 2D matrix, return its element in spiral order as a string.

Example
For this input

matrix[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
the result should be:

"1 2 3 6 9 8 7 4 5"
Reason: The elements are returned in spiral order: starting from the top left corner.
