'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface MedicalDeviceProps {
  size?: number
  className?: string
}

export default function MedicalDevice({
  size = 320,
  className = '',
}: MedicalDeviceProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 心電圖波形動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.ecg-line'), {
        strokeDashoffset: [200, 0],
        duration: 2000,
        loop: true,
        ease: 'linear',
      })
    )

    // 生命體徵監控器脈動
    animations.push(
      animate(containerRef.current.querySelectorAll('.vital-sign'), {
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
        duration: 1000,
        loop: true,
        delay: stagger(200),
        ease: 'inOutSine',
      })
    )

    // 掃描線動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.scan-line'), {
        translateY: [-100, 100],
        opacity: [0, 1, 0],
        duration: 3000,
        loop: true,
        ease: 'inOutQuad',
      })
    )

    // 數據點閃爍
    animations.push(
      animate(containerRef.current.querySelectorAll('.data-point'), {
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8],
        duration: 1500,
        loop: true,
        delay: stagger(100),
        ease: 'inOutQuad',
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

  // 心電圖路徑
  const ecgPath =
    'M20,160 L40,160 L50,140 L60,180 L70,120 L80,200 L90,160 L110,160 L120,150 L130,170 L140,160 L160,160 L170,145 L180,175 L190,155 L200,165 L220,160 L240,160 L250,150 L260,170 L270,160 L300,160'

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
        {/* 監控螢幕框架 */}
        <rect
          x="20"
          y="40"
          width="280"
          height="180"
          rx="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* 心電圖波形 */}
        <path
          className="ecg-line"
          d={ecgPath}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.8"
        />

        {/* 生命體徵指示器 */}
        <circle
          className="vital-sign"
          cx="60"
          cy="260"
          r="8"
          fill="currentColor"
          opacity="0.7"
        />
        <circle
          className="vital-sign"
          cx="120"
          cy="260"
          r="8"
          fill="currentColor"
          opacity="0.7"
        />
        <circle
          className="vital-sign"
          cx="180"
          cy="260"
          r="8"
          fill="currentColor"
          opacity="0.7"
        />
        <circle
          className="vital-sign"
          cx="240"
          cy="260"
          r="8"
          fill="currentColor"
          opacity="0.7"
        />

        {/* 掃描線 */}
        <line
          className="scan-line"
          x1="20"
          y1="130"
          x2="300"
          y2="130"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* 數據點 */}
        {[0, 1, 2, 3, 4].map(index => (
          <circle
            key={`data-point-${index}`}
            className="data-point"
            cx={60 + index * 50}
            cy={100 + Math.sin(index) * 20}
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
        ))}

        {/* 控制按鈕 */}
        <rect
          x="40"
          y="280"
          width="20"
          height="15"
          rx="3"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          x="100"
          y="280"
          width="20"
          height="15"
          rx="3"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          x="160"
          y="280"
          width="20"
          height="15"
          rx="3"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          x="220"
          y="280"
          width="20"
          height="15"
          rx="3"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.3"
        />

        {/* 標籤 */}
        <text
          x="60"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          心率
        </text>
        <text
          x="120"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          血壓
        </text>
        <text
          x="180"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          體溫
        </text>
        <text
          x="240"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          血氧
        </text>
      </svg>
    </div>
  )
}
