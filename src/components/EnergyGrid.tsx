import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface EnergyGridProps {
  size?: number
  className?: string
}

export default function EnergyGrid({
  size = 480,
  className = '',
}: EnergyGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const gridLines = containerRef.current.querySelectorAll('.grid-line')

    animate(gridLines, {
      strokeWidth: [1, 3, 1],
      opacity: [0.5, 1, 0.5],
      duration: 2000,
      loop: true,
      delay: (el, i) => i * 400,
      easing: 'easeInOutSine',
    })

    return () => {}
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 320"
        stroke="currentColor"
        fill="none"
      >
        {/* 能量網格線條 */}
        <line
          className="grid-line"
          x1="0"
          y1="0"
          x2="320"
          y2="320"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          className="grid-line"
          x1="320"
          y1="0"
          x2="0"
          y2="320"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          className="grid-line"
          x1="160"
          y1="0"
          x2="160"
          y2="320"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          className="grid-line"
          x1="0"
          y1="160"
          x2="320"
          y2="160"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
// 確保 Anime.js 已安裝
