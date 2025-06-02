'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface QuantumComputingProps {
  size?: number
  className?: string
}

export default function QuantumComputing({
  size = 320,
  className = '',
}: QuantumComputingProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 量子位元旋轉
    animations.push(
      animate(containerRef.current.querySelectorAll('.qubit'), {
        rotate: 360,
        duration: 3000,
        loop: true,
        delay: stagger(200),
        ease: 'linear',
      })
    )

    // 量子糾纏連接線脈動
    animations.push(
      animate(containerRef.current.querySelectorAll('.entanglement'), {
        strokeWidth: [1, 3, 1],
        opacity: [0.3, 1, 0.3],
        duration: 2000,
        loop: true,
        delay: stagger(300),
        ease: 'inOutSine',
      })
    )

    // 量子門操作動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.quantum-gate'), {
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
        duration: 1500,
        loop: true,
        delay: stagger(400),
        ease: 'inOutQuad',
      })
    )

    // 量子態疊加效果
    animations.push(
      animate(containerRef.current.querySelectorAll('.superposition'), {
        translateY: [0, -10, 0],
        opacity: [0.4, 0.8, 0.4],
        duration: 2500,
        loop: true,
        delay: stagger(150),
        ease: 'inOutSine',
      })
    )

    // 量子測量波動
    animations.push(
      animate(containerRef.current.querySelectorAll('.measurement-wave'), {
        scale: [0, 2, 0],
        opacity: [0.8, 0, 0],
        duration: 3000,
        loop: true,
        delay: stagger(500),
        ease: 'outQuad',
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

  // 量子位元位置
  const qubits = [
    { x: 80, y: 80, id: 0 },
    { x: 160, y: 80, id: 1 },
    { x: 240, y: 80, id: 2 },
    { x: 80, y: 160, id: 3 },
    { x: 160, y: 160, id: 4 },
    { x: 240, y: 160, id: 5 },
    { x: 80, y: 240, id: 6 },
    { x: 160, y: 240, id: 7 },
    { x: 240, y: 240, id: 8 },
  ]

  // 量子糾纏連接
  const entanglements = [
    { from: { x: 80, y: 80 }, to: { x: 240, y: 240 } },
    { from: { x: 160, y: 80 }, to: { x: 160, y: 240 } },
    { from: { x: 240, y: 80 }, to: { x: 80, y: 240 } },
    { from: { x: 80, y: 160 }, to: { x: 240, y: 160 } },
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
        {/* 量子糾纏連接線 */}
        {entanglements.map((ent, index) => (
          <line
            key={`entanglement-${index}`}
            className="entanglement"
            x1={ent.from.x}
            y1={ent.from.y}
            x2={ent.to.x}
            y2={ent.to.y}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="3,3"
          />
        ))}

        {/* 量子位元 */}
        {qubits.map(qubit => (
          <g key={`qubit-${qubit.id}`}>
            {/* 量子位元外圈 */}
            <circle
              className="qubit"
              cx={qubit.x}
              cy={qubit.y}
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            {/* 量子位元內核 */}
            <circle
              cx={qubit.x}
              cy={qubit.y}
              r="8"
              fill="currentColor"
              opacity="0.7"
            />
            {/* 量子態疊加指示 */}
            <circle
              className="superposition"
              cx={qubit.x}
              cy={qubit.y - 15}
              r="3"
              fill="currentColor"
              opacity="0.5"
            />
            <circle
              className="superposition"
              cx={qubit.x}
              cy={qubit.y + 15}
              r="3"
              fill="currentColor"
              opacity="0.5"
            />
          </g>
        ))}

        {/* 量子門 */}
        <rect
          className="quantum-gate"
          x="130"
          y="50"
          width="60"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          className="quantum-gate"
          x="130"
          y="130"
          width="60"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <rect
          className="quantum-gate"
          x="130"
          y="210"
          width="60"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.3"
        />

        {/* 量子測量波動 */}
        {[0, 1, 2].map(index => (
          <circle
            key={`measurement-wave-${index}`}
            className="measurement-wave"
            cx="160"
            cy="160"
            r="30"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        ))}

        {/* 標籤 */}
        <text
          x="160"
          y="30"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          量子位元陣列
        </text>
        <text
          x="160"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          量子計算處理器
        </text>

        {/* 量子門標籤 */}
        <text
          x="160"
          y="65"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          H
        </text>
        <text
          x="160"
          y="145"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          CNOT
        </text>
        <text
          x="160"
          y="225"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Z
        </text>
      </svg>
    </div>
  )
}
