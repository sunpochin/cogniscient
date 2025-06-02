'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface MedicalDeviceProps {
  size?: number
  className?: string
}

export default function MedicalDevice({
  size = 480,
  className = '',
}: MedicalDeviceProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 設計思路：模擬醫療裝置的監控和波形動畫，展示即時數據變化
    animations.push(
      animate(containerRef.current.querySelectorAll('.ecg-line'), {
        strokeDashoffset: [200, 0], // 虛線偏移，創造流動效果
        duration: 2000, // 2 秒週期
        loop: true,
        ease: 'linear', // 線性緩動，保持平滑
      })
    )

    // 為什麼這樣設計：生命體徵監控器脈動動畫，模擬心跳和變化
    animations.push(
      animate(containerRef.current.querySelectorAll('.vital-sign'), {
        scale: [1, 1.1, 1], // 縮放效果
        opacity: [0.7, 1, 0.7], // 透明度變化
        duration: 1000, // 1 秒週期
        loop: true,
        delay: stagger(200), // 延遲 200ms，創造節奏感
        ease: 'inOutSine', // 正弦緩動，自然的脈動
      })
    )

    // 關鍵技巧：掃描線動畫，使用 translate 效果
    animations.push(
      animate(containerRef.current.querySelectorAll('.scan-line'), {
        translateY: [-100, 100], // 垂直移動範圍
        opacity: [0, 1, 0], // 淡入淡出
        duration: 3000, // 3 秒週期
        loop: true,
        ease: 'inOutQuad', // 二次緩動
      })
    )

    // SVG 結構設計：數據點閃爍動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.data-point'), {
        opacity: [0.3, 1, 0.3], // 透明度變化
        scale: [0.8, 1.2, 0.8], // 縮放變化
        duration: 1500, // 1.5 秒週期
        loop: true,
        delay: stagger(100), // 延遲 100ms
        ease: 'inOutQuad', // 二次緩動
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
          Heart Rate
        </text>
        <text
          x="120"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Blood Pressure
        </text>
        <text
          x="180"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Body Temperature
        </text>
        <text
          x="240"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Blood Oxygen
        </text>
      </svg>
    </div>
  )
}
