import NxWelcome from './nx-welcome'

import { Route, Routes, Link } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import MainCanvas from './main/MainCanvas'
import TopBar from './topbar/TopBar'

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <MainCanvas />
      </div>
    </div>
  )
}

export default App
