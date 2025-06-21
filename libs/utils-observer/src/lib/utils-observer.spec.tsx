import { render } from '@testing-library/react'

import UtilsObserver from './utils-observer'

describe('UtilsObserver', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsObserver />)
    expect(baseElement).toBeTruthy()
  })
})
