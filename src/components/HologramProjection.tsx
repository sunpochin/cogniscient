'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface HologramProjectionProps {
  size?: number
  className?: string
}

export default function HologramProjection({
  size = 320,
  className = '',
}: HologramProjectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 全息影像旋轉
    animations.push(
      animate(containerRef.current.querySelectorAll('.hologram-object'), {
        rotateY: 360,
        duration: 6000,
        loop: true,
        ease: 'linear',
      })
    )

    // 投影光束動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.projection-beam'), {
        opacity: [0.3, 0.8, 0.3],
        scaleY: [0.8, 1.2, 0.8],
        duration: 2000,
        loop: true,
        delay: stagger(200),
        ease: 'inOutSine',
      })
    )

    // 全息粒子效果
    animations.push(
      animate(containerRef.current.querySelectorAll('.hologram-particle'), {
        translateY: [0, -30, 0],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        duration: 3000,
        loop: true,
        delay: stagger(150),
        ease: 'inOutQuad',
      })
    )

    // 掃描線動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.scan-line'), {
        translateY: [0, 120],
        opacity: [0, 0.8, 0],
        duration: 2500,
        loop: true,
        ease: 'inOutQuad',
      })
    )

    // 數據流光效
    animations.push(
      animate(containerRef.current.querySelectorAll('.data-stream'), {
        strokeDashoffset: [100, 0],
        opacity: [0.4, 1, 0.4],
        duration: 1500,
        loop: true,
        delay: stagger(100),
        ease: 'linear',
      })
    )

    // 投影器脈動
    animations.push(
      animate(containerRef.current.querySelectorAll('.projector'), {
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
        duration: 3000,
        loop: true,
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
        {/* 投影器基座 */}
        {[0, 1, 2, 3].map(index => {
          const angle = index * 90
          const x = 160 + Math.cos((angle * Math.PI) / 180) * 100
          const y = 160 + Math.sin((angle * Math.PI) / 180) * 100
          return (
            <g key={`projector-${index}`}>
              <rect
                className="projector"
                x={x - 10}
                y={y - 10}
                width="20"
                height="20"
                rx="3"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.3"
              />
              {/* 投影光束 */}
              <line
                className="projection-beam"
                x1={x}
                y1={y}
                x2="160"
                y2="160"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.5"
              />
            </g>
          )
        })}

        {/* 全息投影區域 */}
        <circle
          cx="160"
          cy="160"
          r="80"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          strokeDasharray="5,5"
        />

        {/* 全息物體 - 立方體 */}
        <g
          className="hologram-object"
          style={{ transformOrigin: '160px 160px' }}
        >
          {/* 立方體框架 */}
          <rect
            x="140"
            y="140"
            width="40"
            height="40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
          {/* 立方體深度線 */}
          <line
            x1="140"
            y1="140"
            x2="130"
            y2="130"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="180"
            y1="140"
            x2="170"
            y2="130"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="140"
            y1="180"
            x2="130"
            y2="170"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="180"
            y1="180"
            x2="170"
            y2="170"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* 後面的面 */}
          <rect
            x="130"
            y="130"
            width="40"
            height="40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </g>

        {/* 全息粒子 */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const radius = 60 + Math.random() * 20
          const x = 160 + Math.cos(angle) * radius
          const y = 160 + Math.sin(angle) * radius
          return (
            <circle
              key={`hologram-particle-${i}`}
              className="hologram-particle"
              cx={x}
              cy={y}
              r="2"
              fill="currentColor"
              opacity="0.6"
            />
          )
        })}

        {/* 掃描線 */}
        <line
          className="scan-line"
          x1="80"
          y1="160"
          x2="240"
          y2="160"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* 數據流 */}
        {[0, 1, 2, 3].map(index => {
          const angle = index * 90 + 45
          const startX = 160 + Math.cos((angle * Math.PI) / 180) * 120
          const startY = 160 + Math.sin((angle * Math.PI) / 180) * 120
          return (
            <line
              key={`data-stream-${index}`}
              className="data-stream"
              x1={startX}
              y1={startY}
              x2="160"
              y2="160"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          )
        })}

        {/* 控制面板 */}
        <rect
          x="20"
          y="20"
          width="100"
          height="60"
          rx="5"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.1"
          opacity="0.6"
        />

        {/* 控制按鈕 */}
        {[0, 1, 2].map(index => (
          <circle
            key={`control-${index}`}
            cx={40 + index * 20}
            cy="40"
            r="6"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.3"
          />
        ))}

        {/* 狀態指示器 */}
        {[0, 1, 2, 3].map(index => (
          <rect
            key={`status-${index}`}
            x={30 + index * 15}
            y="60"
            width="8"
            height="12"
            fill="currentColor"
            opacity={0.3 + index * 0.2}
          />
        ))}

        {/* 投影強度環 */}
        {[60, 80, 100].map((radius, index) => (
          <circle
            key={`intensity-ring-${index}`}
            cx="160"
            cy="160"
            r={radius}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity={0.2 - index * 0.05}
            strokeDasharray="2,2"
          />
        ))}

        {/* 標籤 */}
        <text
          x="70"
          y="35"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          全息投影
        </text>
        <text
          x="70"
          y="100"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          控制台
        </text>
        <text
          x="160"
          y="20"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          3D 全息顯示系統
        </text>
        <text
          x="160"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          立體影像投影
        </text>

        {/* 投影器標籤 */}
        <text
          x="260"
          y="70"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          投影器A
        </text>
        <text
          x="250"
          y="260"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          投影器B
        </text>
        <text
          x="70"
          y="260"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          投影器C
        </text>
        <text
          x="70"
          y="70"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          投影器D
        </text>
      </svg>
    </div>
  )
}
