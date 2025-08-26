const sum = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0)

export const blackjackWinner = (player1: number[], player2: number[]) => {
  // implement the logic
  const player1Score = sum(player1)
  const player2Score = sum(player2)
  if (
    player1Score === player2Score ||
    (player1Score > 21 && player2Score > 21)
  ) {
    return 'Draw'
  } else if (
    (player1Score > 21 && player2Score <= 21) ||
    (player1Score <= 21 && player2Score <= 21 && player1Score < player2Score)
  ) {
    return 'Player2'
  } else if (
    (player2Score > 21 && player1Score <= 21) ||
    (player1Score <= 21 && player2Score <= 21 && player2Score < player1Score)
  ) {
    return 'Player1'
  }
}

export const blackjackWinnerCleanerVersion = (
  player1: number[],
  player2: number[]
): 'Player1' | 'Player2' | 'Draw' => {
  const player1Score = sum(player1)
  const player2Score = sum(player2)

  const p1Bust = player1Score > 21
  const p2Bust = player2Score > 21

  if (p1Bust && p2Bust) return 'Draw'
  if (p1Bust) return 'Player2'
  if (p2Bust) return 'Player1'
  if (player1Score === player2Score) return 'Draw'

  return player1Score > player2Score ? 'Player1' : 'Player2'
}
