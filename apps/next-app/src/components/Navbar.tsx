'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

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
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Navigation Links (Mobile) */}
        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 space-y-4`}
        >
          <li>
            <Link href="/" className="text-white hover:text-gray-400 block">
              Home
            </Link>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400 block">
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-white hover:text-gray-400 block"
            >
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-400 block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
