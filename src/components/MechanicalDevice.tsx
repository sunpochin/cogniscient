'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface MechanicalDeviceProps {
  size?: number // 設備大小，預設為 320 (80 * 4)
  className?: string // 額外的 CSS 類別
}

export default function MechanicalDevice({
  size = 480,
  className = '',
}: MechanicalDeviceProps) {
  const deviceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!deviceRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 設計思路：模擬機械裝置的旋轉和互動效果，展示工業機械運作
    animations.push(
      animate(deviceRef.current.querySelectorAll('.outer-ring'), {
        rotate: 360, // 旋轉 360 度
        duration: 8000, // 8 秒完成一圈
        loop: true, // 無限循環
        ease: 'linear', // 線性緩動，保持穩定
      })
    )

    // 為什麼這樣設計：中圈反向旋轉動畫，增加層次感和動態
    animations.push(
      animate(deviceRef.current.querySelectorAll('.middle-ring'), {
        rotate: -360, // 反向旋轉 360 度
        duration: 6000, // 6 秒週期
        loop: true,
        ease: 'linear', // 線性緩動
      })
    )

    // 關鍵技巧：內圈快速旋轉動畫，使用 stagger 延遲
    animations.push(
      animate(deviceRef.current.querySelectorAll('.inner-ring'), {
        rotate: 360, // 旋轉 360 度
        duration: 3000, // 3 秒週期
        loop: true,
        ease: 'linear', // 線性緩動
      })
    )

    // SVG 結構設計：機械臂旋轉動畫
    animations.push(
      animate(deviceRef.current.querySelectorAll('.mechanical-arm'), {
        rotate: 360, // 旋轉 360 度
        duration: 10000, // 10 秒週期
        loop: true,
        delay: stagger(500), // 延遲 500ms，創造順序效果
        ease: 'linear', // 線性緩動
      })
    )

    // 性能考量：小齒輪組動畫，避免過度負載
    animations.push(
      animate(deviceRef.current.querySelectorAll('.gear'), {
        rotate: 360, // 旋轉 360 度
        duration: 2000, // 2 秒週期
        loop: true,
        delay: stagger(200), // 延遲 200ms
        ease: 'linear', // 線性緩動
      })
    )

    // 響應式設計：3D 效果縮放脈動動畫
    animations.push(
      animate(deviceRef.current.querySelectorAll('.pulse-element'), {
        scale: [1, 1.1, 1], // 縮放效果
        duration: 4000, // 4 秒週期
        loop: true,
        delay: stagger(300), // 延遲 300ms
        ease: 'inOutQuad', // 二次緩動
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
