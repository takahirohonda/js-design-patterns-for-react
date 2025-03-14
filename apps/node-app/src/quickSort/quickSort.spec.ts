import { quickSort } from './quickSort'

describe('quickSort', () => {
  it('should do quick sort', () => {
    const array1 = [9, 3, 2, 4, 5, 6, 8, 7, 1, 0]

    expect(quickSort(array1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('testing the logic to get the middle of the array', () => {
    const array1 = [0, 1, 2, 3, 4, 5]
    const middle1 = Math.floor((array1.length - 1) / 2)
    expect(middle1).toBe(2)

    const array2 = [0, 1, 2, 3, 4, 5, 6]
    const middle2 = Math.floor((array2.length - 1) / 2)
    expect(middle2).toBe(3)
  })
})
