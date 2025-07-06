describe('Bug in Apple', () => {
  it('should return the index of the bug in the apple', () => {
    const apple = [
      ['A', 'A', 'A'],
      ['A', 'B', 'A'],
      ['A', 'A', 'A'],
    ]

    const bugInApple = (apple: string[][]): [number, number] => {
      for (let i = 0; i < apple.length; i++) {
        for (let j = 0; j < apple[i].length; j++) {
          if (apple[i][j] === 'B') {
            return [i, j]
          }
        }
      }

      return [-1, -1] // Return [-1, -1] if no bug is found
    }

    expect(bugInApple(apple)).toEqual([1, 1])
  })
})
