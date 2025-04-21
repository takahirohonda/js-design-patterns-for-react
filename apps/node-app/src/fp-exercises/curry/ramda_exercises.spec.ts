import * as R from 'ramda'

describe('Rambda Exercises', () => {
  const splitWords = R.curry((delimiter, sentence) => sentence.split(delimiter))
  const splitByWhiteSpace = splitWords(' ')

  it('map exercise', () => {
    const sentences = ['my name is Tom', 'whatever it is']
    const mapSplit = R.chain(splitByWhiteSpace)
    expect(mapSplit(sentences)).toEqual([
      'my',
      'name',
      'is',
      'Tom',
      'whatever',
      'it',
      'is',
    ])
  })
})
