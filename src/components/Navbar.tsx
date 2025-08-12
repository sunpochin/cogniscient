'use client'

import { useState } from 'react'
import { Box } from '@mui/material'
import type { FC } from 'react'
import Link from 'next/link'

export type NavBarType = {
  className?: string
}

const navLinks = [
  { label: 'About Us', href: '/#about-us' },
  { label: 'Services', href: '/#services' },
  { label: 'Members', href: '/members' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact Us', href: '/#contact-us' },
]

/**
 * 全局導覽列元件。
 * 在桌面端顯示完整選單，在手機端（<768px）顯示漢堡選單。
 */
const NavBar: FC<NavBarType> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Box
      component="header"
      className={`w-full flex justify-between items-center px-4 sm:px-8 py-4 bg-white relative ${className}`}
    >
      {/* Logo */}
      {/* <div className="text-xl font-bold">
        <Link href="/" onClick={closeMenu}>
          Cogniscient
        </Link>
      </div> */}

      {/* Desktop Menu (md and up) */}
      <nav className="hidden md:flex items-center space-x-8 text-lg text-black">
        {navLinks.map(link => (
          <Link href={link.href} key={link.label}>
            <div className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">
              {link.label}
            </div>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button (md and down) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <Link href={link.href} key={link.label}>
                <div
                  className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={closeMenu} // Close menu on click
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </Box>
  )
}

export default NavBar
