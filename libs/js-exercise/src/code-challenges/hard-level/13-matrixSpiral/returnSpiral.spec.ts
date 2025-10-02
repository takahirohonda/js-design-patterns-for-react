import { returnSpiral } from './returnSpiral'

describe('returnSpiral', () => {
  describe('basic examples from problem description', () => {
    it('should return spiral order for 3x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 3 6 9 8 7 4 5')
    })

    it('should return spiral order for 4x4 matrix from problem description', () => {
      const matrix = [
        [22, 20, 25, 18],
        [33, 7, 11, 14],
        [31, 29, 16, 5],
        [24, 35, 10, 12],
      ]
      expect(returnSpiral(matrix)).toBe(
        '22 20 25 18 14 5 12 10 35 24 31 33 7 11 16 29'
      )
    })
  })

  describe('edge cases - single element', () => {
    it('should handle 1x1 matrix', () => {
      const matrix = [[42]]
      expect(returnSpiral(matrix)).toBe('42')
    })
  })

  describe('single row matrices', () => {
    it('should handle 1x2 matrix', () => {
      const matrix = [[1, 2]]
      expect(returnSpiral(matrix)).toBe('1 2')
    })

    it('should handle 1x3 matrix', () => {
      const matrix = [[1, 2, 3]]
      expect(returnSpiral(matrix)).toBe('1 2 3')
    })

    it('should handle 1x5 matrix', () => {
      const matrix = [[10, 20, 30, 40, 50]]
      expect(returnSpiral(matrix)).toBe('10 20 30 40 50')
    })
  })

  describe('single column matrices', () => {
    it('should handle 2x1 matrix', () => {
      const matrix = [[1], [2]]
      expect(returnSpiral(matrix)).toBe('1 2')
    })

    it('should handle 3x1 matrix', () => {
      const matrix = [[1], [2], [3]]
      expect(returnSpiral(matrix)).toBe('1 2 3')
    })

    it('should handle 5x1 matrix', () => {
      const matrix = [[10], [20], [30], [40], [50]]
      expect(returnSpiral(matrix)).toBe('10 20 30 40 50')
    })
  })

  describe('rectangular matrices', () => {
    it('should handle 2x3 matrix (more columns)', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 3 6 5 4')
    })

    it('should handle 3x2 matrix (more rows)', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 4 6 5 3')
    })

    it('should handle 2x4 matrix', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 3 4 8 7 6 5')
    })

    it('should handle 4x2 matrix', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 4 6 8 7 5 3')
    })

    it('should handle 3x5 matrix', () => {
      const matrix = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 3 4 5 10 15 14 13 12 11 6 7 8 9')
    })

    it('should handle 5x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 3 6 9 12 15 14 13 10 7 4 5 8 11')
    })
  })

  describe('larger square matrices', () => {
    it('should handle 2x2 matrix', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ]
      expect(returnSpiral(matrix)).toBe('1 2 4 3')
    })

    it('should handle 5x5 matrix', () => {
      const matrix = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [25, 24, 23, 22, 21],
      ]
      expect(returnSpiral(matrix)).toBe(
        '1 2 3 4 5 10 15 20 21 22 23 24 25 16 11 6 7 8 9 14 19 18 17 12 13'
      )
    })
  })

  describe('matrices with negative numbers', () => {
    it('should handle matrix with negative numbers', () => {
      const matrix = [
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
      ]
      expect(returnSpiral(matrix)).toBe('-1 -2 -3 -6 -9 -8 -7 -4 -5')
    })

    it('should handle matrix with mixed positive and negative numbers', () => {
      const matrix = [
        [1, -2, 3],
        [-4, 5, -6],
        [7, -8, 9],
      ]
      expect(returnSpiral(matrix)).toBe('1 -2 3 -6 9 -8 7 -4 5')
    })
  })

  describe('matrices with zeros', () => {
    it('should handle matrix with zeros', () => {
      const matrix = [
        [0, 1, 2],
        [3, 0, 5],
        [6, 7, 0],
      ]
      expect(returnSpiral(matrix)).toBe('0 1 2 5 0 7 6 3 0')
    })

    it('should handle matrix with all zeros', () => {
      const matrix = [
        [0, 0, 0],
        [0, 0, 0],
      ]
      expect(returnSpiral(matrix)).toBe('0 0 0 0 0 0')
    })
  })

  describe('matrices with large numbers', () => {
    it('should handle matrix with large numbers', () => {
      const matrix = [
        [1000, 2000],
        [3000, 4000],
      ]
      expect(returnSpiral(matrix)).toBe('1000 2000 4000 3000')
    })
  })

  describe('input validation', () => {
    it('should handle empty matrix', () => {
      const matrix: number[][] = []
      expect(returnSpiral(matrix)).toBe('')
    })

    it('should handle matrix with empty rows', () => {
      const matrix = [[]]
      expect(returnSpiral(matrix)).toBe('')
    })
  })
})
