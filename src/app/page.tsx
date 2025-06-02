'use client'
import { animate, createScope, Scope } from 'animejs'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import MechanicalDevice from '@/components/MechanicalDevice'
import ParticleSystem from '@/components/ParticleSystem'
import NeuralNetwork from '@/components/NeuralNetwork'
import MedicalDevice from '@/components/MedicalDevice'
import IndustrialControl from '@/components/IndustrialControl'
import QuantumComputing from '@/components/QuantumComputing'
import SatelliteComm from '@/components/SatelliteComm'
import DNAAnalysis from '@/components/DNAAnalysis'
import RadarSystem from '@/components/RadarSystem'
import HologramProjection from '@/components/HologramProjection'

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

  // 渲染不同標籤頁的內容
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-4xl">
              從認知神經科學角度出發，專注於複雜系統的人機界面設計，例如直線粒子加速器、大型醫療設備，以及大型礦場鑽油設施。我們提供低調科技感的解決方案，幫助客戶優化人機互動。
            </p>

            {/* 複雜機械 3D 旋轉裝置 */}
            <MechanicalDevice size={320} />

            <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/contact"
              >
                聯絡我們
              </a>
            </div>

            {/* Hero Section */}
            <section className="bg-black text-white w-full rounded-lg p-12 mt-12">
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-blue-300 hero-text mb-6">
                  {'COGNITIVE INTERFACE'.split('').map((letter, index) => (
                    <span key={index} className="inline-block opacity-0">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-400 max-w-xl text-lg">
                  Applying neuroscience to the world&apos;s most complex
                  human-machine systems.
                </p>
              </div>

              {/* Use Cases Section */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-blue-200">
                    Linear Particle Accelerators
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Optimizing operator cognition under extreme conditions.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-blue-200">
                    Advanced Medical Devices
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Designing intuitive UIs for complex diagnostic workflows.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-blue-200">
                    Oil Drilling Systems
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Enhancing decision support for remote operations.
                  </p>
                </div>
              </div>
            </section>
          </main>
        )
      case 'mechanical':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">機械裝置動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              複雜機械系統的 3D
              旋轉動畫，展示多層次的機械運作原理，適用於工業控制系統和精密設備的人機界面設計。
            </p>
            <MechanicalDevice size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <MechanicalDevice size={200} />
              <MechanicalDevice size={200} />
              <MechanicalDevice size={200} />
            </div> */}
          </main>
        )
      case 'particle':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">粒子系統動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              模擬粒子加速器和高能物理實驗的動態視覺效果，展示粒子軌跡、能量波動和核心反應過程。
            </p>
            <ParticleSystem size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <ParticleSystem size={200} />
              <ParticleSystem size={200} />
              <ParticleSystem size={200} />
            </div> */}
          </main>
        )
      case 'neural':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">神經網路動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              視覺化神經網路的信號傳遞過程，展示認知科學在人機界面設計中的應用，適用於
              AI 輔助決策系統。
            </p>
            <NeuralNetwork size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <NeuralNetwork size={300} />
              <NeuralNetwork size={300} />
            </div> */}
          </main>
        )
      case 'medical':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">醫療設備動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              模擬醫療監控設備的即時數據顯示，包括心電圖、生命體徵監控和診斷掃描系統的動態界面。
            </p>
            <MedicalDevice size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <MedicalDevice size={200} />
              <MedicalDevice size={200} />
              <MedicalDevice size={200} />
            </div> */}
          </main>
        )
      case 'industrial':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">工業控制動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              展示工業自動化系統的控制界面，包括管道流體監控、壓力溫度檢測和閥門控制系統的動態視覺化。
            </p>
            <IndustrialControl size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <IndustrialControl size={300} />
              <IndustrialControl size={300} />
            </div> */}
          </main>
        )
      case 'quantum':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">量子計算動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              展示量子位元、量子糾纏和量子門操作的視覺化效果，適用於量子計算研究和高端科學計算系統的人機界面設計。
            </p>
            <QuantumComputing size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <QuantumComputing size={200} />
              <QuantumComputing size={200} />
              <QuantumComputing size={200} />
            </div> */}
          </main>
        )
      case 'satellite':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">衛星通訊動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              模擬衛星軌道運行、信號傳輸和地面站通訊的動態效果，展示全球通訊網路和太空通訊系統的運作原理。
            </p>
            <SatelliteComm size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <SatelliteComm size={300} />
              <SatelliteComm size={300} />
            </div> */}
          </main>
        )
      case 'dna':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">DNA 分析動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              視覺化 DNA
              雙螺旋結構、基因序列分析和蛋白質合成過程，適用於生物醫學研究設備和基因工程系統界面。
            </p>
            <DNAAnalysis size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <DNAAnalysis size={200} />
              <DNAAnalysis size={200} />
              <DNAAnalysis size={200} />
            </div> */}
          </main>
        )
      case 'radar':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">雷達系統動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              展示雷達掃描、目標檢測和追蹤系統的即時動態效果，適用於軍事防禦、航空管制和海事監控系統界面。
            </p>
            <RadarSystem size={400} />
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <RadarSystem size={300} />
              <RadarSystem size={300} />
            </div>
          </main>
        )
      case 'hologram':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">全息投影動畫</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              模擬 3D
              全息影像投射、光束投影和立體顯示效果，展示未來顯示技術和虛擬實境系統的視覺化界面。
            </p>
            <HologramProjection size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <HologramProjection size={200} />
              <HologramProjection size={200} />
              <HologramProjection size={200} />
            </div> */}
          </main>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div
        ref={root}
        className="container mx-auto px-4 py-8 font-[family-name:var(--font-geist-sans)]"
      >
        {renderTabContent()}
      </div>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 py-8">
        © 2025 WL Consulting
      </footer>
    </div>
  )
}
