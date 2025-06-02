'use client'
import {} from 'react'
import Image from 'next/image'

interface NavbarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const tabs = [
    { id: 'home', label: '首頁', icon: '🏠' },
    { id: 'mechanical', label: '機械裝置', icon: '⚙️' },
    { id: 'particle', label: '粒子系統', icon: '🔬' },
    { id: 'neural', label: '神經網路', icon: '🧠' },
    { id: 'medical', label: '醫療設備', icon: '🏥' },
    { id: 'industrial', label: '工業控制', icon: '🏭' },
    { id: 'quantum', label: '量子計算', icon: '⚛️' },
    { id: 'satellite', label: '衛星通訊', icon: '🛰️' },
    { id: 'dna', label: 'DNA 分析', icon: '🧬' },
    { id: 'radar', label: '雷達系統', icon: '📡' },
    { id: 'hologram', label: '全息投影', icon: '🔮' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
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

          {/* Navigation Tabs */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">開啟主選單</span>
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
        </div>

        {/* Mobile menu */}
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
        </div>
      </div>
    </nav>
  )
}
