describe('compose exercises', () => {
  describe('compose - intro', () => {
    const toUpper = (str) => str.toUpperCase()

    const exclaim = (str) => str + '!'

    const first = (xs) => xs[0]
    const add = (x, y) => x + y
    const curry = (fn) => (x) => (y) => fn(x, y)

    const log = (tag) => (x) => (console.log(`${tag}: ${x}`), x)
    it('should compose with 2 functions', () => {
      // Data travels from right to left
      const compose = (f, g) => (x) => f(g(x))

      expect(compose(toUpper, exclaim)('hello')).toBe('HELLO!')
      expect(compose(compose(toUpper, exclaim), first)('hell')).toBe('H!')
      expect(compose(compose(curry(add)('&'), toUpper), first)('hello')).toBe(
        '&H'
      )

      // doing console.log
      compose(compose(curry(add)('&'), log('checking log')), first)('hello')
    })

    it('should pipe with 2 functions', () => {
      // Data travels from left to right
      const pipe = (f, g) => (x) => g(f(x))

      expect(pipe(toUpper, exclaim)('hello')).toBe('HELLO!')
      expect(pipe(pipe(first, exclaim), toUpper)('hell')).toBe('H!')
      expect(pipe(pipe(curry(add)('&'), toUpper), first)('hello')).toBe('&')
    })
  })
})
