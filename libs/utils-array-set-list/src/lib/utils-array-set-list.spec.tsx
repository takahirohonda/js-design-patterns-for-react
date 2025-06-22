import { render } from '@testing-library/react'

import UtilsArraySetList from './utils-array-set-list'

describe('UtilsArraySetList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsArraySetList />)
    expect(baseElement).toBeTruthy()
  })
})
