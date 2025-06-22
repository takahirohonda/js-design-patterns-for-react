import { render } from '@testing-library/react'

import UtilsRecursion from './utils-recursion'

describe('UtilsRecursion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsRecursion />)
    expect(baseElement).toBeTruthy()
  })
})
