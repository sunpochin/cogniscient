'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface DNAAnalysisProps {
  size?: number
  className?: string
}

export default function DNAAnalysis({
  size = 320,
  className = '',
}: DNAAnalysisProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // DNA雙螺旋旋轉
    animations.push(
      animate(containerRef.current.querySelectorAll('.dna-helix'), {
        rotate: 360,
        duration: 10000,
        loop: true,
        ease: 'linear',
      })
    )

    // 鹼基對閃爍
    animations.push(
      animate(containerRef.current.querySelectorAll('.base-pair'), {
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.1, 0.8],
        duration: 2000,
        loop: true,
        delay: stagger(100),
        ease: 'inOutSine',
      })
    )

    // 基因序列掃描
    animations.push(
      animate(containerRef.current.querySelectorAll('.sequence-scanner'), {
        translateY: [0, 200],
        opacity: [0, 1, 0],
        duration: 3000,
        loop: true,
        ease: 'inOutQuad',
      })
    )

    // 蛋白質合成動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.protein'), {
        scale: [0, 1, 1.2, 1],
        opacity: [0, 0.8, 1, 0.8],
        duration: 4000,
        loop: true,
        delay: stagger(500),
        ease: 'inOutQuad',
      })
    )

    // 分析數據流動
    animations.push(
      animate(containerRef.current.querySelectorAll('.data-stream'), {
        translateX: [0, 150],
        opacity: [0, 1, 0],
        duration: 2500,
        loop: true,
        delay: stagger(200),
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

  // DNA鹼基對位置
  const basePairs = Array.from({ length: 12 }, (_, i) => ({
    y: 50 + i * 20,
    type: ['A-T', 'G-C', 'C-G', 'T-A'][i % 4],
  }))

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
        {/* DNA雙螺旋結構 */}
        <g className="dna-helix" style={{ transformOrigin: '160px 160px' }}>
          {/* 左側螺旋 */}
          <path
            d="M120,50 Q140,80 120,110 Q100,140 120,170 Q140,200 120,230 Q100,260 120,290"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
          {/* 右側螺旋 */}
          <path
            d="M200,50 Q180,80 200,110 Q220,140 200,170 Q180,200 200,230 Q220,260 200,290"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />

          {/* 鹼基對連接 */}
          {basePairs.map((pair, index) => (
            <line
              key={`base-pair-${index}`}
              className="base-pair"
              x1="120"
              y1={pair.y}
              x2="200"
              y2={pair.y}
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.6"
            />
          ))}
        </g>

        {/* 基因序列掃描線 */}
        <line
          className="sequence-scanner"
          x1="100"
          y1="50"
          x2="220"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* 分析儀器框架 */}
        <rect
          x="20"
          y="40"
          width="280"
          height="240"
          rx="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* 蛋白質分子 */}
        {[0, 1, 2].map(index => (
          <circle
            key={`protein-${index}`}
            className="protein"
            cx={250 + index * 15}
            cy={100 + index * 30}
            r="8"
            fill="currentColor"
            opacity="0.7"
          />
        ))}

        {/* 數據流 */}
        {[0, 1, 2, 3, 4].map(index => (
          <circle
            key={`data-stream-${index}`}
            className="data-stream"
            cx="30"
            cy={80 + index * 25}
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
        ))}

        {/* 分析結果顯示區 */}
        <rect
          x="240"
          y="60"
          width="60"
          height="100"
          rx="5"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.1"
          opacity="0.5"
        />

        {/* 基因標記 */}
        {basePairs.slice(0, 6).map((pair, index) => (
          <text
            key={`gene-marker-${index}`}
            x="35"
            y={pair.y + 5}
            className="text-xs fill-current opacity-60"
          >
            {pair.type}
          </text>
        ))}

        {/* 控制面板 */}
        <rect
          x="40"
          y="290"
          width="240"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.2"
          opacity="0.6"
        />

        {/* 控制按鈕 */}
        {[0, 1, 2, 3].map(index => (
          <circle
            key={`control-${index}`}
            cx={60 + index * 50}
            cy="300"
            r="6"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.3"
          />
        ))}

        {/* 標籤 */}
        <text
          x="160"
          y="25"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          DNA 序列分析儀
        </text>
        <text
          x="270"
          y="50"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          分析結果
        </text>
        <text
          x="270"
          y="180"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          蛋白質
        </text>
        <text
          x="160"
          y="320"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          基因工程控制台
        </text>
      </svg>
    </div>
  )
}
