import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface BiotechLabProps {
  size?: number
  className?: string
}

export default function BiotechLab({
  size = 480,
  className = '',
}: BiotechLabProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const moleculeElements = containerRef.current.querySelectorAll('.molecule')

    animate(moleculeElements, {
      rotate: [0, 360],
      scale: [1, 1.5, 1],
      duration: 2500,
      loop: true,
      easing: 'easeInOutElastic',
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
        {/* 分子結構 */}
        <circle
          className="molecule"
          cx="160"
          cy="160"
          r="40"
          strokeWidth="2"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          className="molecule"
          d="M160 120 Q180 80 200 120 T240 120"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="molecule"
          d="M160 200 Q180 240 200 200 T240 200"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  )
}
// 確保 Anime.js 已安裝
