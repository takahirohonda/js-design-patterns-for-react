import { render } from '@testing-library/react'

import UtilsSubPub from './utils-sub-pub'

describe('UtilsSubPub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsSubPub />)
    expect(baseElement).toBeTruthy()
  })
})
