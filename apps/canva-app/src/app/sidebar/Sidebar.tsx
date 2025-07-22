import React from 'react'

const images = [
  'https://via.placeholder.com/80x80?text=Img1',
  'https://via.placeholder.com/80x80?text=Img2',
  'https://via.placeholder.com/80x80?text=Img3',
]

const Sidebar: React.FC = () => {
  return (
    <aside className="w-32 bg-gray-100 p-2 flex flex-col gap-2 border-r">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Sidebar img ${idx + 1}`}
          draggable
          className="rounded shadow cursor-grab"
          style={{ width: 80, height: 80 }}
          onDragStart={(e) => {
            e.dataTransfer.setData('text/plain', src)
          }}
        />
      ))}
    </aside>
  )
}

export default Sidebar
