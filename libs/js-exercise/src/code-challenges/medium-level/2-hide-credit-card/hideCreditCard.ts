// Replace first 12 digits with an asterisk(`*`)
export const hideCreditCard = (cardNumber: string) => {
  return '*'.repeat(cardNumber.length - 4) + cardNumber.slice(-4)
}
