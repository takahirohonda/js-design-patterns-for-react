import { render } from '@testing-library/react/'

import UtilsObservable from './utils-observable'

describe('UtilsObservable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsObservable />)
    expect(baseElement).toBeTruthy()
  })
})
