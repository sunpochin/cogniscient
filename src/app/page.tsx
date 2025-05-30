'use client'
import { animate, createScope, Scope, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

export default function Home() {
  const root = useRef(null)
  const scope = useRef<Scope | null>(null)

  useEffect(() => {
    scope.current = createScope({ root }).add(self => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // 複雜機械 3D 旋轉動畫
      // 外圈旋轉
      animate('.outer-ring', {
        rotate: 360,
        duration: 8000,
        loop: true,
        ease: 'linear',
      })

      // 中圈反向旋轉
      animate('.middle-ring', {
        rotate: -360,
        duration: 6000,
        loop: true,
        ease: 'linear',
      })

      // 內圈快速旋轉
      animate('.inner-ring', {
        rotate: 360,
        duration: 3000,
        loop: true,
        ease: 'linear',
      })

      // 機械臂旋轉
      animate('.mechanical-arm', {
        rotate: 360,
        duration: 10000,
        loop: true,
        ease: 'linear',
        delay: stagger(500), // 延遲啟動
      })

      // 小齒輪組
      animate('.gear', {
        rotate: 360,
        duration: 2000,
        loop: true,
        ease: 'linear',
        delay: stagger(200),
      })

      // 3D 效果 - 縮放脈動
      animate('.pulse-element', {
        scale: [1, 1.1, 1],
        duration: 4000,
        loop: true,
        ease: 'inOutQuad',
        delay: stagger(300),
      })

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

  return (
    <div
      ref={root}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          WL Consulting
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          WL Consulting
          從認知神經科學角度出發，專注於複雜系統的人機界面設計，例如直線粒子加速器、大型醫療設備，以及大型礦場鑽油設施。我們提供低調科技感的解決方案，幫助客戶優化人機互動。
        </p>

        {/* 複雜機械 3D 旋轉裝置 */}
        <div className="relative w-80 h-80 mx-auto">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 320"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
            opacity="0.6"
          >
            {/* 外圈 */}
            <circle
              className="outer-ring"
              cx="160"
              cy="160"
              r="140"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle
              className="outer-ring"
              cx="160"
              cy="160"
              r="130"
              strokeWidth="1"
              opacity="0.2"
            />

            {/* 中圈 */}
            <circle
              className="middle-ring pulse-element"
              cx="160"
              cy="160"
              r="100"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle
              className="middle-ring"
              cx="160"
              cy="160"
              r="90"
              strokeWidth="1"
              opacity="0.3"
            />

            {/* 內圈 */}
            <circle
              className="inner-ring pulse-element"
              cx="160"
              cy="160"
              r="60"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              className="inner-ring"
              cx="160"
              cy="160"
              r="50"
              strokeWidth="1"
              opacity="0.4"
            />

            {/* 機械臂 */}
            <line
              className="mechanical-arm"
              x1="160"
              y1="160"
              x2="160"
              y2="60"
              strokeWidth="3"
              opacity="0.6"
            />
            <line
              className="mechanical-arm"
              x1="160"
              y1="160"
              x2="260"
              y2="160"
              strokeWidth="3"
              opacity="0.6"
            />
            <line
              className="mechanical-arm"
              x1="160"
              y1="160"
              x2="160"
              y2="260"
              strokeWidth="3"
              opacity="0.6"
            />
            <line
              className="mechanical-arm"
              x1="160"
              y1="160"
              x2="60"
              y2="160"
              strokeWidth="3"
              opacity="0.6"
            />

            {/* 小齒輪 */}
            <circle
              className="gear pulse-element"
              cx="160"
              cy="60"
              r="15"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle
              className="gear pulse-element"
              cx="260"
              cy="160"
              r="12"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle
              className="gear pulse-element"
              cx="160"
              cy="260"
              r="18"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle
              className="gear pulse-element"
              cx="60"
              cy="160"
              r="14"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* 中心核心 */}
            <circle
              className="pulse-element"
              cx="160"
              cy="160"
              r="20"
              strokeWidth="3"
              opacity="0.8"
              fill="currentColor"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/contact"
          >
            聯絡我們
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 WL Consulting
      </footer>
    </div>
  )
}
