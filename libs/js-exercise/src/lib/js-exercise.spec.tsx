import { render } from '@testing-library/react'

import JsExercise from './js-exercise'

describe('JsExercise', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsExercise />)
    expect(baseElement).toBeTruthy()
  })
})
