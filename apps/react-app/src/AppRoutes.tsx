import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
)
