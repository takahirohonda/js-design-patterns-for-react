import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './app'

// Helper to get the image src from the sidebar
const getSidebarImageSrc = () => 'https://via.placeholder.com/80x80?text=Img1'

describe('App drag and drop integration', () => {
  it('renders dropped image in the main canvas', async () => {
    render(<App />)
    const user = userEvent.setup()

    // Find the first sidebar image
    const sidebarImg = screen.getByAltText('Sidebar img 1')
    expect(sidebarImg).toBeVisible()

    // Find the main canvas (by role)
    const mainCanvas = screen.getByRole('main')
    expect(mainCanvas).toBeVisible()

    // Simulate drag start
    await user.pointer([{ keys: '[MouseLeft>]', target: sidebarImg }])

    // Mock dataTransfer for drop event
    const dataTransfer = {
      getData: jest.fn(() => getSidebarImageSrc()),
      setData: jest.fn(),
      dropEffect: 'move',
      effectAllowed: 'all',
      files: [],
      items: [],
      types: ['text/plain'],
    }

    // Fire dragOver to allow drop
    fireEvent.dragOver(mainCanvas, { dataTransfer })
    // Fire drop event with mocked dataTransfer
    fireEvent.drop(mainCanvas, {
      dataTransfer,
      clientX: 100,
      clientY: 100,
    })

    // Assert the dropped image is now in the main canvas
    const droppedImg = screen.getAllByAltText(/Dropped/)[0]
    expect(droppedImg).toBeVisible()
    expect(droppedImg).toHaveAttribute('src', getSidebarImageSrc())
  })
})
