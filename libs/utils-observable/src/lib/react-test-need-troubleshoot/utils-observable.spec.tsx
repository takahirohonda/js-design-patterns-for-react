// Having error for testing react component in this lib...

// ● Test suite failed to run

//     Cannot find module '@testing-library/dom' from '../../node_modules/@testing-library/react/dist/pure.js'

//     Require stack:
//       /Users/taka/code/mdh/js-design-patterns-for-react/node_modules/@testing-library/react/dist/pure.js
//       /Users/taka/code/mdh/js-design-patterns-for-react/node_modules/@testing-library/react/dist/index.js
//       src/lib/react-test-need-troubleshoot/utils-observable.spec.tsx

//     > 1 | import { render } from '@testing-library/react/'
//         | ^

import { render } from '@testing-library/react/'

import UtilsObservable from './utils-observable'

describe('UtilsObservable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsObservable />)
    expect(baseElement).toBeTruthy()
  })
})
