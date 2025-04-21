describe('compose exercises', () => {
  describe('compose - intro', () => {
    const toUpper = (str) => str.toUpperCase()

    const exclaim = (str) => str + '!'

    const first = (xs) => xs[0]
    const add = (x, y) => x + y
    const curry = (fn) => (x) => (y) => fn(x, y)
    it('should compose with 2 functions', () => {
      const compose = (f, g) => (x) => f(g(x))

      expect(compose(toUpper, exclaim)('hello')).toBe('HELLO!')
      expect(compose(compose(toUpper, exclaim), first)('hell')).toBe('H!')

      expect(compose(compose(curry(add)('&'), toUpper), first)('hello')).toBe(
        '&H'
      )
    })
  })
})
