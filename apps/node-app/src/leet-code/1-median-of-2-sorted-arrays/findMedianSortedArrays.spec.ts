import { findMedianSortedArrays } from './findMedianSortedArrays'

describe('findMedianSortedArrays', () => {
  it.each<{
    nums1: number[]
    nums2: number[]
    expected: number
    description: string
  }>([
    {
      nums1: [1, 3],
      nums2: [2],
      expected: 2.0,
      description: 'merged array = [1,2,3], median is 2',
    },
    {
      nums1: [1, 2],
      nums2: [3, 4],
      expected: 2.5,
      description: 'merged array = [1,2,3,4], median is (2+3)/2 = 2.5',
    },
    {
      nums1: [],
      nums2: [1],
      expected: 1.0,
      description: 'first array empty, median is single element',
    },
    {
      nums1: [2],
      nums2: [],
      expected: 2.0,
      description: 'second array empty, median is single element',
    },
    {
      nums1: [1, 2, 3, 4, 5],
      nums2: [6, 7, 8, 9, 10],
      expected: 5.5,
      description: 'even total length, median is average of 5 and 6',
    },
    {
      nums1: [1, 3, 5],
      nums2: [2, 4, 6, 7],
      expected: 4.0,
      description: 'odd total length, median is the middle element',
    },
    {
      nums1: [1, 1, 1],
      nums2: [1, 1, 1],
      expected: 1.0,
      description: 'all elements are the same',
    },
    {
      nums1: [1, 2],
      nums2: [1, 2, 3],
      expected: 2.0,
      description: 'overlapping arrays with odd total',
    },
  ])(
    'returns $expected when nums1=$nums1 and nums2=$nums2 ($description)',
    ({ nums1, nums2, expected }) => {
      const result = findMedianSortedArrays(nums1, nums2)
      expect(result).toBe(expected)
    }
  )
})
