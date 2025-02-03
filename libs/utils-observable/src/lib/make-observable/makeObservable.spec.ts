import { makeObservable } from './makeObservable'

describe('makeObservable', () => {
  it('should call the function when the property of the object is updated', () => {
    const mockHandler = jest.fn()
    let user = {}
    user = makeObservable(user)
    console.log(`checking observe in user: ${user?.observe}`)
    console.log(typeof user.observe)
    user.observe(mockHandler)

    user.name = 'Meme'

    expect(mockHandler).toHaveBeenCalledWith('name', 'Meme')
  })
})
