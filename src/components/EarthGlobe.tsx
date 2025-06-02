import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface EarthGlobeProps {
  size?: number
  className?: string
}

export default function EarthGlobe({
  size = 320,
  className = '',
}: EarthGlobeProps) {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!globeRef.current) return

    const earthElement = globeRef.current.querySelector('.earth')

    if (earthElement) {
      // 確保元素存在
      animate(earthElement, {
        opacity: [0.6, 0.9, 0.6], // 隱約閃光效果
        scale: [0.95, 1.05, 0.95],
        duration: 2000,
        loop: true,
        easing: 'easeInOutSine',
      })
    }

    return () => {
      // 清理動畫，如果需要
    }
  }, [])

  return (
    <div
      ref={globeRef}
      className={`relative mx-auto ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 320"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        opacity="0.8"
      >
        {/* 地球圓圈 */}
        <circle
          className="earth"
          cx="160"
          cy="160"
          r="60"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.2"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
// 確保 Anime.js 已安裝
