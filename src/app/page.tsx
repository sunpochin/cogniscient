'use client'
import anime from 'animejs'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import HomeContent from '../components/HomeContent'

export default function Home() {
  const root = useRef(null)
  const scope = useRef<any>(null)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    // Simple anime.js animation example
    const animation = anime({
      targets: '.logo',
      rotate: 360,
      duration: 1500,
      easing: 'easeOutQuart',
      autoplay: false
    })

    // Store animation reference for cleanup
    scope.current = animation

    // Cleanup animation on unmount
    return () => {
      if (scope.current) {
        scope.current.pause()
      }
    }
  }, [])

  // 根據 activeTab 顯示三個分頁內容
  let content = null
  if (activeTab === 'home') {
    content = <HomeContent />
  } else if (activeTab === 'research') {
    content = <ResearchContent />
  } else if (activeTab === 'demos') {
    content = <DemosContent />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      {/* <HeroSection /> */}
      <div className="container mx-auto px-4 py-8 md:py-16 font-[family-name:var(--font-geist-sans)]">
        {content}
      </div>
      {/* <ContactUs /> */}
      <footer className="flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 py-8">
        © 2025 Made with ❤️ by sunpochin@gmail.com
      </footer>
    </div>
  )
}


function ResearchContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">認知神經科學</h3>
        <p className="text-sm md:text-base">
          我們利用腦電圖（EEG）、功能性磁振造影（fMRI）等技術，研究人類在操作複雜系統時的認知過程，例如注意力、決策和心智負荷。
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">人因工程</h3>
        <p className="text-sm md:text-base">
          我們將人因工程學原理應用於界面設計，確保系統不僅功能強大，而且直觀、易於使用，並能最大程度地減少人為錯誤。
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">複雜系統</h3>
        <p className="text-sm md:text-base">
          我們的專業知識涵蓋各種複雜系統，包括但不限於：粒子加速器、核融合反應爐、電網控制中心、空中交通管制系統。
        </p>
      </div>
    </div>
  )
}

function DemosContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">直線加速器控制模擬</h3>
        <p className="text-sm md:text-base">體驗我們為下一代粒子加速器設計的控制界面，感受前所未有的精準操控。</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">智慧電網監控</h3>
        <p className="text-sm md:text-base">
          了解我們如何利用數據可視化和機器學習，協助電網運營商應對各種挑戰。
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">腦機接口應用</h3>
        <p className="text-sm md:text-base">探索我們在腦機接口領域的最新研究，以及它在醫療和工業領域的潛力。</p>
      </div>
    </div>
  )
}
