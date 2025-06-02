import React, { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface VRInterfaceProps {
  size?: number
  className?: string
}

export default function VRInterface({
  size = 480,
  className = '',
}: VRInterfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const interfaceElements =
      containerRef.current.querySelectorAll('.vr-element')

    animate(interfaceElements, {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      duration: 1800,
      loop: true,
      delay: (el, i) => i * 300,
      easing: 'easeInOutQuad',
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
        {/* VR 介面元素 */}
        <rect
          className="vr-element"
          x="100"
          y="100"
          width="50"
          height="50"
          strokeWidth="2"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          className="vr-element"
          x="180"
          y="100"
          width="50"
          height="50"
          strokeWidth="2"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          className="vr-element"
          x="140"
          y="180"
          width="50"
          height="50"
          strokeWidth="2"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
// 確保 Anime.js 已安裝
