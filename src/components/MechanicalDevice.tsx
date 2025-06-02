'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface MechanicalDeviceProps {
  size?: number // 設備大小，預設為 320 (80 * 4)
  className?: string // 額外的 CSS 類別
}

export default function MechanicalDevice({
  size = 320,
  className = '',
}: MechanicalDeviceProps) {
  const deviceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!deviceRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 外圈旋轉
    animations.push(
      animate(deviceRef.current.querySelectorAll('.outer-ring'), {
        rotate: 360,
        duration: 8000,
        loop: true,
        ease: 'linear',
      })
    )

    // 中圈反向旋轉
    animations.push(
      animate(deviceRef.current.querySelectorAll('.middle-ring'), {
        rotate: -360,
        duration: 6000,
        loop: true,
        ease: 'linear',
      })
    )

    // 內圈快速旋轉
    animations.push(
      animate(deviceRef.current.querySelectorAll('.inner-ring'), {
        rotate: 360,
        duration: 3000,
        loop: true,
        ease: 'linear',
      })
    )

    // 機械臂旋轉
    animations.push(
      animate(deviceRef.current.querySelectorAll('.mechanical-arm'), {
        rotate: 360,
        duration: 10000,
        loop: true,
        ease: 'linear',
        delay: stagger(500),
      })
    )

    // 小齒輪組
    animations.push(
      animate(deviceRef.current.querySelectorAll('.gear'), {
        rotate: 360,
        duration: 2000,
        loop: true,
        ease: 'linear',
        delay: stagger(200),
      })
    )

    // 3D 效果 - 縮放脈動
    animations.push(
      animate(deviceRef.current.querySelectorAll('.pulse-element'), {
        scale: [1, 1.1, 1],
        duration: 4000,
        loop: true,
        ease: 'inOutQuad',
        delay: stagger(300),
      })
    )

    // 清理動畫
    return () => {
      animations.forEach(animation => {
        if (animation && animation.pause) {
          animation.pause()
        }
      })
    }
  }, [])

  const sizeClass = `w-${Math.floor(size / 16)} h-${Math.floor(size / 16)}`

  return (
    <div
      ref={deviceRef}
      className={`relative ${sizeClass} mx-auto ${className}`}
      style={{ width: size, height: size }}
    >
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
  )
}
