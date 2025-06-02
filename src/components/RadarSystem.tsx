'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface RadarSystemProps {
  size?: number
  className?: string
}

export default function RadarSystem({
  size = 480,
  className = '',
}: RadarSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 雷達掃描旋轉
    animations.push(
      animate(containerRef.current.querySelectorAll('.radar-sweep'), {
        rotate: 360,
        duration: 4000,
        loop: true,
        ease: 'linear',
      })
    )

    // 目標閃爍
    animations.push(
      animate(containerRef.current.querySelectorAll('.target'), {
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8],
        duration: 1500,
        loop: true,
        delay: stagger(200),
        ease: 'inOutSine',
      })
    )

    // 距離圈脈動
    animations.push(
      animate(containerRef.current.querySelectorAll('.range-circle'), {
        strokeWidth: [1, 2, 1],
        opacity: [0.3, 0.6, 0.3],
        duration: 3000,
        loop: true,
        delay: stagger(500),
        ease: 'inOutSine',
      })
    )

    // 追蹤線動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.tracking-line'), {
        strokeDashoffset: [50, 0],
        opacity: [0.4, 0.8, 0.4],
        duration: 2000,
        loop: true,
        delay: stagger(300),
        ease: 'linear',
      })
    )

    // 信號強度指示
    animations.push(
      animate(containerRef.current.querySelectorAll('.signal-bar'), {
        scaleY: [0.3, 1, 0.3],
        duration: 1000,
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

  // 目標位置
  const targets = [
    { x: 200, y: 100, type: 'aircraft', strength: 0.8 },
    { x: 120, y: 80, type: 'missile', strength: 0.6 },
    { x: 250, y: 180, type: 'ship', strength: 0.9 },
    { x: 80, y: 200, type: 'vehicle', strength: 0.4 },
  ]

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
        {/* 雷達螢幕背景 */}
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.05"
          opacity="0.6"
        />

        {/* 距離圈 */}
        {[40, 80, 120].map((radius, index) => (
          <circle
            key={`range-circle-${index}`}
            className="range-circle"
            cx="160"
            cy="160"
            r={radius}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        ))}

        {/* 方位線 */}
        <line
          x1="160"
          y1="20"
          x2="160"
          y2="300"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="20"
          y1="160"
          x2="300"
          y2="160"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="60"
          y1="60"
          x2="260"
          y2="260"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
        />
        <line
          x1="260"
          y1="60"
          x2="60"
          y2="260"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
        />

        {/* 雷達掃描線 */}
        <g className="radar-sweep" style={{ transformOrigin: '160px 160px' }}>
          <line
            x1="160"
            y1="160"
            x2="160"
            y2="20"
            stroke="currentColor"
            strokeWidth="3"
            opacity="0.8"
          />
          {/* 掃描扇形 */}
          <path
            d="M160,160 L160,20 A140,140 0 0,1 200,30 Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="none"
          />
        </g>

        {/* 目標點 */}
        {targets.map((target, index) => (
          <g key={`target-${index}`}>
            <circle
              className="target"
              cx={target.x}
              cy={target.y}
              r="6"
              fill="currentColor"
              opacity="0.8"
            />
            {/* 目標標識 */}
            <rect
              x={target.x - 8}
              y={target.y - 8}
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
          </g>
        ))}

        {/* 追蹤線 */}
        {targets.map((target, index) => (
          <line
            key={`tracking-line-${index}`}
            className="tracking-line"
            x1="160"
            y1="160"
            x2={target.x}
            y2={target.y}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.5"
          />
        ))}

        {/* 控制面板 */}
        <rect
          x="20"
          y="20"
          width="80"
          height="60"
          rx="5"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.1"
          opacity="0.6"
        />

        {/* 信號強度指示器 */}
        {targets.map((target, index) => (
          <rect
            key={`signal-bar-${index}`}
            className="signal-bar"
            x={30 + index * 12}
            y={70 - target.strength * 40}
            width="8"
            height={target.strength * 40}
            fill="currentColor"
            opacity="0.7"
            style={{ transformOrigin: 'bottom' }}
          />
        ))}

        {/* 雷達天線 */}
        <circle
          cx="160"
          cy="160"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.3"
        />

        {/* 方位角度標記 */}
        <text
          x="160"
          y="15"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          0°
        </text>
        <text
          x="305"
          y="165"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          90°
        </text>
        <text
          x="160"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          180°
        </text>
        <text
          x="15"
          y="165"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          270°
        </text>

        {/* 距離標記 */}
        <text
          x="200"
          y="165"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          40km
        </text>
        <text
          x="240"
          y="165"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          80km
        </text>

        {/* 系統狀態 */}
        <text
          x="60"
          y="35"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Radar System
        </text>
        <text
          x="60"
          y="50"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Running
        </text>

        {/* 目標信息 */}
        <text
          x="250"
          y="35"
          textAnchor="start"
          className="text-xs fill-current opacity-60"
        >
          Detected Targets: {targets.length}
        </text>
        <text
          x="250"
          y="50"
          textAnchor="start"
          className="text-xs fill-current opacity-60"
        >
          Tracking: {targets.filter(t => t.strength > 0.5).length}
        </text>
      </svg>
    </div>
  )
}
