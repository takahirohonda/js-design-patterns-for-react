import { render } from '@testing-library/react'

import FpExercise from './fp-exercise'

describe('FpExercise', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FpExercise />)
    expect(baseElement).toBeTruthy()
  })
})
