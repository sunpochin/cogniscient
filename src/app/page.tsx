'use client'
import { animate, createScope, Scope } from 'animejs'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import ContactUs from '@/components/ContactUs'
import HeroSection from '@/components/HeroSection'
import HomeContent from '../components/HomeContent'
import ResearchContent from '../components/ResearchContent'
import DemosContent from '../components/DemosContent'

export default function Home() {
  const root = useRef(null)
  const scope = useRef<Scope | null>(null)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    scope.current = createScope({ root }).add(self => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      self.add('rotateLogo', i => {
        animate('.logo', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        })
      })
    })

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      if (scope.current) {
        scope.current.revert()
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
      <div className="container mx-auto px-4 py-8 font-[family-name:var(--font-geist-sans)]">
        {content}
      </div>
      {/* <ContactUs /> */}
      <footer className="flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 py-8">
        © 2025 Made with ❤️ by sunpochin@gmail.com
      </footer>
    </div>
  )
}
