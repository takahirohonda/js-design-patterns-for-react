'use client'

import React, { useState } from 'react'
import { LinkList } from './Navbar/LinkList'
import { twMerge } from 'tailwind-merge'
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const mobileNavClass = twMerge(
    isMobileMenuOpen ? 'block' : 'hidden',
    'md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 space-y-4'
  )

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          <LinkList />
        </ul>

        {/* Navigation Links (Mobile) */}
        <ul className={mobileNavClass}>
          <LinkList />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
