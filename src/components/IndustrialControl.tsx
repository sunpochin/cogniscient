'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface IndustrialControlProps {
  size?: number
  className?: string
}

export default function IndustrialControl({
  size = 320,
  className = '',
}: IndustrialControlProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 管道流體動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.flow-particle'), {
        translateX: [0, 200],
        opacity: [0, 1, 0],
        duration: 2000,
        loop: true,
        delay: stagger(200),
        ease: 'linear',
      })
    )

    // 壓力表指針旋轉
    animations.push(
      animate(containerRef.current.querySelectorAll('.pressure-needle'), {
        rotate: [0, 180, 0],
        duration: 4000,
        loop: true,
        ease: 'inOutQuad',
      })
    )

    // 溫度計液體上升
    animations.push(
      animate(containerRef.current.querySelectorAll('.temperature-liquid'), {
        scaleY: [0.3, 1, 0.3],
        duration: 3000,
        loop: true,
        ease: 'inOutSine',
      })
    )

    // 控制閥門動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.valve'), {
        rotate: [0, 90, 0],
        duration: 2500,
        loop: true,
        delay: stagger(500),
        ease: 'inOutQuad',
      })
    )

    // 狀態指示燈閃爍
    animations.push(
      animate(containerRef.current.querySelectorAll('.status-light'), {
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8],
        duration: 1000,
        loop: true,
        delay: stagger(300),
        ease: 'inOutSine',
      })
    )

    return () => {
      animations.forEach(animation => {
        if (animation && animation.pause) {
          animation.pause()
        }
      })
    }
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
        strokeWidth="1"
        opacity="0.8"
      >
        {/* 主管道系統 */}
        <rect
          x="50"
          y="140"
          width="220"
          height="20"
          rx="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* 垂直管道 */}
        <rect
          x="140"
          y="80"
          width="20"
          height="80"
          rx="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* 流體粒子 */}
        {[0, 1, 2, 3, 4].map(index => (
          <circle
            key={`flow-particle-${index}`}
            className="flow-particle"
            cx="60"
            cy="150"
            r="3"
            fill="currentColor"
            opacity="0.7"
          />
        ))}

        {/* 壓力表 */}
        <circle
          cx="100"
          cy="100"
          r="25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <line
          className="pressure-needle"
          x1="100"
          y1="100"
          x2="100"
          y2="80"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* 溫度計 */}
        <rect
          x="200"
          y="60"
          width="8"
          height="60"
          rx="4"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <rect
          className="temperature-liquid"
          x="201"
          y="100"
          width="6"
          height="19"
          fill="currentColor"
          opacity="0.7"
          style={{ transformOrigin: 'bottom' }}
        />
        <circle
          cx="204"
          cy="125"
          r="6"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.7"
        />

        {/* 控制閥門 */}
        <rect
          className="valve"
          x="145"
          y="195"
          width="10"
          height="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.3"
          style={{ transformOrigin: 'center' }}
        />

        {/* 狀態指示燈 */}
        <circle
          className="status-light"
          cx="80"
          cy="200"
          r="6"
          fill="currentColor"
          opacity="0.7"
        />
        <circle
          className="status-light"
          cx="120"
          cy="200"
          r="6"
          fill="currentColor"
          opacity="0.7"
        />
        <circle
          className="status-light"
          cx="160"
          cy="200"
          r="6"
          fill="currentColor"
          opacity="0.7"
        />
        <circle
          className="status-light"
          cx="200"
          cy="200"
          r="6"
          fill="currentColor"
          opacity="0.7"
        />

        {/* 控制面板 */}
        <rect
          x="40"
          y="240"
          width="240"
          height="60"
          rx="8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        {/* 控制按鈕 */}
        {[0, 1, 2, 3, 4].map(index => (
          <rect
            key={`button-${index}`}
            x={60 + index * 40}
            y="260"
            width="20"
            height="20"
            rx="4"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.3"
          />
        ))}

        {/* 標籤 */}
        <text
          x="100"
          y="50"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          壓力
        </text>
        <text
          x="204"
          y="50"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          溫度
        </text>
        <text
          x="160"
          y="230"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          控制閥
        </text>
        <text
          x="160"
          y="320"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          控制面板
        </text>
      </svg>
    </div>
  )
}
