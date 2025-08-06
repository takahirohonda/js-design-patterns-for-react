import { findLongestDominoChain } from './findLongestDominoChain'

describe('findLongestDominoChain', () => {
  describe('Basic Cases', () => {
    it('should return 0 for empty array', () => {
      expect(findLongestDominoChain([])).toBe(0)
    })

    it('should return 1 for single domino', () => {
      expect(findLongestDominoChain([[1, 2]])).toBe(1)
    })

    it('should return 1 when no dominoes can be connected', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [3, 4],
          [5, 6],
        ])
      ).toBe(1)
    })
  })

  describe('Simple Chains', () => {
    it('should find chain of 2 dominoes', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
        ])
      ).toBe(2)
    })

    it('should find chain of 3 dominoes', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 4],
        ])
      ).toBe(3)
    })

    it('should find chain of 4 dominoes in sequence', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
        ])
      ).toBe(4)
    })
  })

  describe('Chains with Rotation', () => {
    it('should handle rotation to form longer chain', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 1],
          [1, 3],
          [3, 4],
        ])
      ).toBe(4)
    })

    it('should handle multiple rotations', () => {
      expect(
        findLongestDominoChain([
          [2, 1],
          [1, 3],
          [3, 2],
          [2, 4],
        ])
      ).toBe(4)
    })

    it('should find optimal chain with rotations', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [3, 1],
          [2, 3],
          [4, 5],
        ])
      ).toBe(3)
    })
  })

  describe('Complex Scenarios', () => {
    it('should handle circular chains', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 1],
        ])
      ).toBe(3)
    })

    it('should handle chains with branches', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [2, 4],
          [4, 5],
        ])
      ).toBe(3)
    })

    it('should find longest chain when multiple options exist', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 4],
          [1, 5],
          [5, 6],
        ])
      ).toBe(4)
    })
  })

  describe('Edge Cases', () => {
    it('should handle dominoes with same numbers', () => {
      expect(
        findLongestDominoChain([
          [1, 1],
          [1, 2],
          [2, 3],
        ])
      ).toBe(3)
    })

    it('should handle duplicate dominoes', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [1, 2],
          [2, 3],
        ])
      ).toBe(2)
    })

    it('should handle dominoes with zero', () => {
      expect(
        findLongestDominoChain([
          [0, 1],
          [1, 2],
          [2, 0],
        ])
      ).toBe(3)
    })

    it('should handle negative numbers', () => {
      expect(
        findLongestDominoChain([
          [-1, 2],
          [2, -3],
          [-3, 4],
        ])
      ).toBe(3)
    })
  })

  describe('Performance Cases', () => {
    it('should handle larger arrays efficiently', () => {
      const dominos = [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 8],
        [8, 9],
        [9, 10],
        [10, 11],
      ]
      expect(findLongestDominoChain(dominos)).toBe(10)
    })

    it('should handle arrays with many unconnectable dominoes', () => {
      const dominos = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10],
        [11, 12],
        [13, 14],
        [15, 16],
        [17, 18],
        [19, 20],
      ]
      expect(findLongestDominoChain(dominos)).toBe(1)
    })
  })

  describe('Mixed Scenarios', () => {
    it('should handle mix of connectable and unconnectable dominoes', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [5, 6],
          [3, 4],
          [7, 8],
        ])
      ).toBe(4)
    })

    it('should handle dominoes that can form multiple chains', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [4, 5],
          [5, 6],
          [3, 4],
        ])
      ).toBe(5)
    })

    it('should handle complex branching scenarios', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [1, 6],
          [6, 7],
          [7, 8],
          [9, 10],
          [10, 11],
        ])
      ).toBe(5)
    })
  })

  describe('Documentation Examples', () => {
    it('should pass example 1 from documentation', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
        ])
      ).toBe(4)
    })

    it('should pass example 2 from documentation', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 1],
          [1, 3],
          [3, 4],
        ])
      ).toBe(4)
    })

    it('should pass example 3 from documentation', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [3, 4],
          [5, 6],
        ])
      ).toBe(1)
    })

    it('should pass example 4 from documentation', () => {
      expect(
        findLongestDominoChain([
          [1, 2],
          [2, 3],
          [3, 1],
          [1, 4],
        ])
      ).toBe(4)
    })
  })
})
