import { createObservable } from './observable'

describe('Observable exercise', () => {
  it('should call function when the object property is updated', () => {
    const user = {
      name: 'me',
      age: 20,
    }

    const userWithObservable = createObservable(user)

    userWithObservable.age = 30
    userWithObservable.name = 'you'

    expect(userWithObservable).toEqual({
      name: 'you',
      age: 30,
    })

    userWithObservable.age = -3
    userWithObservable.name = 'updated'

    expect(userWithObservable).toEqual({
      name: 'updated',
      age: 30,
    })
  })
})
