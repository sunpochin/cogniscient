'use client'
import {} from 'react'
import Image from 'next/image'

interface NavbarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const tabs = [
    { id: 'mechanical', label: 'Mechanical Device', icon: '⚙️' },
    { id: 'particle', label: 'Particle System', icon: '🔬' },
    { id: 'medical', label: 'Medical Device', icon: '🏥' },
    { id: 'industrial', label: 'Industrial Control', icon: '🏭' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'satellite', label: 'Satellite Communication', icon: '🛰️' },
    { id: 'dna', label: 'DNA Analysis', icon: '🧬' },
    { id: 'radar', label: 'Radar System', icon: '📡' },
    { id: 'hologram', label: 'Hologram Projection', icon: '🔮' },
    { id: 'energy-grid', label: 'Energy Grid', icon: '🔋' },
    { id: 'neural', label: 'Neural Network', icon: '🧠' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700 fixed top-0 left-0 h-full w-64">
      <div className="flex flex-col h-full">
        {/* Logo 和其他元素 */}
        <div className="flex-shrink-0 flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Image
            src="/logo.png"
            alt="WL Consulting"
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
            WL Consulting
          </span>
        </div>

        {/* 垂直標籤頁 */}
        <div className="flex flex-col space-y-2 p-4 mt-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
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
      {/* 移動版選單可以保留或調整 */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 ${
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
        <button
          type="button"
          className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
