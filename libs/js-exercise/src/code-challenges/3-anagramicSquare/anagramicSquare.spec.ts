import { anagramicSquare } from './anagramicSquare'

describe('anagramicSquare', () => {
  it('should work', () => {
    expect(anagramicSquare(169)).toBe(true)
    expect(anagramicSquare(1111111)).toBe(false)
  })
})
