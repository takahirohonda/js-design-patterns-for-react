describe('Test Symbol Behaviour', () => {
  it('is checking Symbol Behaviour', () => {
    const handlers = Symbol('handlers')
    const myObject = {}

    // Symbol always has to be set as `myObject[handlers]`. `myObject.handlers` is not setting the symbol
    myObject[handlers] = [1, 2, 3]
    myObject['NotASymbol'] = 'test'

    console.log(`Checking myObject: `)
    console.log(myObject)
    console.log(Object.keys(myObject))

    console.log(myObject.handlers)
    console.log(myObject[handlers])

    myObject['handlers'] = 'hellow'

    console.log(myObject.handlers)
    console.log(myObject['handlers'])
  })
})
