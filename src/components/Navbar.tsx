'use client'
import {} from 'react'
import Image from 'next/image'

interface NavbarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'demos', label: 'Demos', icon: '💡' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="WL Consulting"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">
            WL Consulting
          </span>
        </div>
        {/* 水平 tab */}
        <div className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
