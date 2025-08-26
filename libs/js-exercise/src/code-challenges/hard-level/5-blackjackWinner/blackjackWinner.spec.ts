import { blackjackWinner } from './blackjackWinner'

describe('blackjackWinner', () => {
  it('should return Draw when both players have the same score', () => {
    expect(blackjackWinner([8, 7], [8, 7])).toBe('Draw')
    expect(blackjackWinner([10, 11], [9, 12])).toBe('Draw')
    expect(blackjackWinner([5, 5, 6], [7, 9])).toBe('Draw') // 16 vs 16
    expect(blackjackWinner([2, 3, 4, 5, 7], [21])).toBe('Draw') // 21 vs 21
  })

  it('should return Player2 if player1 goes over 21', () => {
    expect(blackjackWinner([11, 11], [4, 5])).toBe('Player2')
    expect(blackjackWinner([15, 10], [10, 10])).toBe('Player2')
    expect(blackjackWinner([7, 8, 9], [10, 10])).toBe('Player2') // 24 vs 20
  })

  it('should return Player1 if player2 goes over 21', () => {
    expect(blackjackWinner([10, 10], [15, 10])).toBe('Player1')
    expect(blackjackWinner([9, 11], [12, 12])).toBe('Player1')
    expect(blackjackWinner([5, 6, 7], [8, 8, 8])).toBe('Player1') // 18 vs 24
  })

  it('should return Player1 if player1 is closer to 21', () => {
    expect(blackjackWinner([10, 9], [8, 7])).toBe('Player1')
    expect(blackjackWinner([10, 10], [9, 9])).toBe('Player1')
    expect(blackjackWinner([5, 6, 8], [10, 8])).toBe('Player1') // 19 vs 18
  })

  it('should return Player2 if player2 is closer to 21', () => {
    expect(blackjackWinner([8, 7], [10, 9])).toBe('Player2')
    expect(blackjackWinner([9, 9], [10, 10])).toBe('Player2')
    expect(blackjackWinner([2, 3, 4, 5], [7, 7, 6])).toBe('Player2') // 14 vs 20
  })
})
