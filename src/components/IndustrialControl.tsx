'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface IndustrialControlProps {
  size?: number
  className?: string
}

export default function IndustrialControl({
  size = 480,
  className = '',
}: IndustrialControlProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 設計思路：模擬工業控制系統的流體動畫和儀表變化，展示動態監控
    animations.push(
      animate(containerRef.current.querySelectorAll('.flow-particle'), {
        translateX: [0, 200], // 水平移動 200 像素
        opacity: [0, 1, 0], // 淡入淡出效果
        duration: 2000, // 2 秒週期
        loop: true,
        delay: stagger(200), // 每個元素延遲 200ms，創造流動感
        ease: 'linear', // 線性緩動，保持流暢
      })
    )

    // 為什麼這樣設計：壓力表指針旋轉動畫，模擬壓力變化的動態
    animations.push(
      animate(containerRef.current.querySelectorAll('.pressure-needle'), {
        rotate: [0, 180, 0], // 旋轉範圍
        duration: 4000, // 4 秒週期
        loop: true,
        ease: 'inOutQuad', // 二次緩動，加速後減速
      })
    )

    // 關鍵技巧：溫度計液體上升動畫，使用 scale 效果
    animations.push(
      animate(containerRef.current.querySelectorAll('.temperature-liquid'), {
        scaleY: [0.3, 1, 0.3], // 垂直縮放
        duration: 3000, // 3 秒週期
        loop: true,
        ease: 'inOutSine', // 正弦緩動，自然的上升效果
      })
    )

    // SVG 結構設計：控制閥門動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.valve'), {
        rotate: [0, 90, 0], // 旋轉 90 度
        duration: 2500, // 2.5 秒週期
        loop: true,
        delay: stagger(500), // 延遲 500ms
        ease: 'inOutQuad', // 二次緩動
      })
    )

    // 性能考量：狀態指示燈閃爍動畫，避免過度複雜
    animations.push(
      animate(containerRef.current.querySelectorAll('.status-light'), {
        opacity: [0.3, 1, 0.3], // 透明度變化
        scale: [0.8, 1.2, 0.8], // 縮放變化
        duration: 1000, // 1 秒週期
        loop: true,
        delay: stagger(300), // 延遲 300ms
        ease: 'inOutSine', // 正弦緩動
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
          Pressure
        </text>
        <text
          x="204"
          y="50"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Temperature
        </text>
        <text
          x="160"
          y="230"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Control Valve
        </text>
        <text
          x="160"
          y="320"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Control Panel
        </text>
      </svg>
    </div>
  )
}
