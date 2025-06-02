import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface AISimulationProps {
  size?: number
  className?: string
}

export default function AISimulation({
  size = 480,
  className = '',
}: AISimulationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const nodes = containerRef.current.querySelectorAll('.node')

    animate(nodes, {
      translateY: [-10, 10],
      opacity: [0.5, 1, 0.5],
      duration: 1500,
      loop: true,
      delay: (el, i) => i * 200,
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
        {/* 神經網絡節點 */}
        {[0, 1, 2, 3, 4].map(i => (
          <circle
            key={i}
            className="node"
            cx={100 + i * 50}
            cy={160}
            r="10"
            strokeWidth="2"
            fill="currentColor"
            opacity="0.7"
          />
        ))}
        {/* 連接線條 */}
        <line
          x1="100"
          y1="160"
          x2="150"
          y2="160"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="150"
          y1="160"
          x2="200"
          y2="160"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="200"
          y1="160"
          x2="250"
          y2="160"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
// 確保 Anime.js 已安裝
