import React from 'react'

const TopBar: React.FC = () => {
  return (
    <header className="w-full h-14 bg-gray-200 flex items-center px-4 border-b">
      <label className="flex items-center gap-2">
        <span>Background:</span>
        <input type="color" defaultValue="#ffffff" />
      </label>
    </header>
  )
}

export default TopBar
