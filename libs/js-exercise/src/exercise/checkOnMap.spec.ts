import { insertDuplicateObject } from './checkOnMap'

describe('checkOnMap', () => {
  it('should not insert the same object', () => {
    const map = insertDuplicateObject()
    expect(map.size).toBe(1)
    expect(map.get('1')).toEqual({ name: 'me', dob: '2000-01-01' })
  })
})
