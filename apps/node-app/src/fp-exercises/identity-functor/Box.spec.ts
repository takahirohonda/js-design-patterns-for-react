import { Box } from './Box'

describe('Box', () => {
  it('should enable dot chain', () => {
    const result = Box('a')
      .map((x) => x.toUpperCase())
      .map((x) => x + '!').inspect

    expect(result).toBe('Box(A!)')
  })

  it('can be refactored by Box', () => {
    const refactoredVer = (str) =>
      Box(str)
        .map((x) => x.trim())
        .map((x) => parseInt(x))
        .fold((x) => x + 1)

    expect(refactoredVer('12  ')).toBe(13)
  })
})
