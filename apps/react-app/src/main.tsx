import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import * as ReactDOM from 'react-dom/client'
import { AppRoutes } from './AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
