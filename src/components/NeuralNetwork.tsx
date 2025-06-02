'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface NeuralNetworkProps {
  size?: number
  className?: string
}

export default function NeuralNetwork({
  size = 320,
  className = '',
}: NeuralNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 神經元脈動
    animations.push(
      animate(containerRef.current.querySelectorAll('.neuron'), {
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
        duration: 2000,
        loop: true,
        delay: stagger(200),
        ease: 'inOutSine',
      })
    )

    // 連接線信號傳遞
    animations.push(
      animate(containerRef.current.querySelectorAll('.connection'), {
        strokeDashoffset: [100, 0],
        opacity: [0.3, 0.8, 0.3],
        duration: 1500,
        loop: true,
        delay: stagger(100),
        ease: 'linear',
      })
    )

    // 數據流動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.data-flow'), {
        translateX: [0, 200],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        duration: 2500,
        loop: true,
        delay: stagger(300),
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

  // 神經元位置
  const neurons = [
    // 輸入層
    { x: 50, y: 80, layer: 'input' },
    { x: 50, y: 160, layer: 'input' },
    { x: 50, y: 240, layer: 'input' },

    // 隱藏層1
    { x: 130, y: 60, layer: 'hidden1' },
    { x: 130, y: 120, layer: 'hidden1' },
    { x: 130, y: 180, layer: 'hidden1' },
    { x: 130, y: 240, layer: 'hidden1' },

    // 隱藏層2
    { x: 210, y: 100, layer: 'hidden2' },
    { x: 210, y: 160, layer: 'hidden2' },
    { x: 210, y: 220, layer: 'hidden2' },

    // 輸出層
    { x: 290, y: 130, layer: 'output' },
    { x: 290, y: 190, layer: 'output' },
  ]

  // 連接線
  const connections = [
    // 輸入層到隱藏層1
    { from: { x: 50, y: 80 }, to: { x: 130, y: 60 } },
    { from: { x: 50, y: 80 }, to: { x: 130, y: 120 } },
    { from: { x: 50, y: 160 }, to: { x: 130, y: 120 } },
    { from: { x: 50, y: 160 }, to: { x: 130, y: 180 } },
    { from: { x: 50, y: 240 }, to: { x: 130, y: 180 } },
    { from: { x: 50, y: 240 }, to: { x: 130, y: 240 } },

    // 隱藏層1到隱藏層2
    { from: { x: 130, y: 60 }, to: { x: 210, y: 100 } },
    { from: { x: 130, y: 120 }, to: { x: 210, y: 100 } },
    { from: { x: 130, y: 120 }, to: { x: 210, y: 160 } },
    { from: { x: 130, y: 180 }, to: { x: 210, y: 160 } },
    { from: { x: 130, y: 180 }, to: { x: 210, y: 220 } },
    { from: { x: 130, y: 240 }, to: { x: 210, y: 220 } },

    // 隱藏層2到輸出層
    { from: { x: 210, y: 100 }, to: { x: 290, y: 130 } },
    { from: { x: 210, y: 160 }, to: { x: 290, y: 130 } },
    { from: { x: 210, y: 160 }, to: { x: 290, y: 190 } },
    { from: { x: 210, y: 220 }, to: { x: 290, y: 190 } },
  ]

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 340 320"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        opacity="0.8"
      >
        {/* 連接線 */}
        {connections.map((conn, index) => (
          <line
            key={`connection-${index}`}
            className="connection"
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="5,5"
          />
        ))}

        {/* 神經元 */}
        {neurons.map((neuron, index) => (
          <circle
            key={`neuron-${index}`}
            className="neuron"
            cx={neuron.x}
            cy={neuron.y}
            r={
              neuron.layer === 'input' || neuron.layer === 'output' ? '8' : '6'
            }
            fill="currentColor"
            fillOpacity="0.6"
            stroke="currentColor"
            strokeWidth="2"
          />
        ))}

        {/* 數據流 */}
        {[0, 1, 2].map(index => (
          <circle
            key={`data-flow-${index}`}
            className="data-flow"
            cx="30"
            cy={80 + index * 80}
            r="3"
            fill="currentColor"
            opacity="0.8"
          />
        ))}

        {/* 層標籤 */}
        <text
          x="50"
          y="30"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          輸入層
        </text>
        <text
          x="130"
          y="30"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          隱藏層
        </text>
        <text
          x="210"
          y="30"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          隱藏層
        </text>
        <text
          x="290"
          y="30"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          輸出層
        </text>
      </svg>
    </div>
  )
}
