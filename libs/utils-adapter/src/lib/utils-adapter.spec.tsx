import { render } from '@testing-library/react'

import UtilsAdapter from './utils-adapter'

describe('UtilsAdapter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsAdapter />)
    expect(baseElement).toBeTruthy()
  })
})
