import { fromNullable, tryCatch } from './left-right'
import fs from 'fs'

describe('Either Monad Exercise 1', () => {
  describe('Ex 1', () => {
    const data = { red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }
    const findColor = (name) => data[name].toUpperCase()

    it('should return unexpected_error when it cannot find key', () => {
      expect(findColor('red')).toBe('#FF4444')

      // expect(findColor('redd')).toBe('unexpected_error')
    })

    it('using either monad', () => {
      const format = (x) =>
        fromNullable(data[x])
          .map((x) => x.toUpperCase())
          .fold(
            () => 'unexpected_error',
            (x) => x
          )
      expect(format('red')).toBe('#FF4444')
      expect(format('redd')).toBe('unexpected_error')
    })
  })

  describe('Ex 2', () => {
    const FILE_PATH =
      'apps/node-app/src/fp-exercises/either-monad/data/config.json'
    it('should return port with try-catch', () => {
      const getPort = (filePath) => {
        try {
          const str = fs.readFileSync(filePath, 'utf-8')
          const config = JSON.parse(str)
          return config.port
        } catch (e) {
          return 3000
        }
      }

      expect(getPort(FILE_PATH)).toBe(8000)

      expect(getPort('./non-existent-file.json')).toBe(3000)
    })

    it('should return port with either monad', () => {
      const readFileSyncFn = (filePath) =>
        tryCatch(() => fs.readFileSync(filePath, 'utf-8'))

      const getPort = (filePath) =>
        readFileSyncFn(filePath)
          .map((x) => JSON.parse(x))
          .fold(
            () => 3000,
            (x) => x.port
          )

      expect(getPort(FILE_PATH)).toBe(8000)
      expect(getPort('./non-existent-file.json')).toBe(3000)

      // handle JSON.parse error, as well
      const parseJSONFn = (json) => tryCatch(() => JSON.parse(json))

      const getPort2 = (filePath) =>
        readFileSyncFn(filePath)
          .chain((x) => parseJSONFn(x))
          .map((x) => x.port)
          .fold(
            () => 3000,
            (x) => x
          )
      expect(getPort2(FILE_PATH)).toBe(8000)
      expect(getPort2('./non-existent-file.json')).toBe(3000)
    })
  })
})
