import React, { useState } from 'react'

interface DroppedImage {
  src: string
  x: number
  y: number
}

const MainCanvas: React.FC = () => {
  const [images, setImages] = useState<DroppedImage[]>([])
  const [bgColor, setBgColor] = useState('#ffffff')

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const src = e.dataTransfer.getData('text/plain')
    const rect = e.currentTarget.getBoundingClientRect()
    setImages((imgs) => [
      ...imgs,
      {
        src,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ])
  }

  return (
    <main
      className="flex-1 relative bg-white border"
      style={{ background: bgColor }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={`Dropped ${idx}`}
          style={{
            position: 'absolute',
            left: img.x,
            top: img.y,
            width: 80,
            height: 80,
            pointerEvents: 'none',
          }}
        />
      ))}
    </main>
  )
}

export default MainCanvas
