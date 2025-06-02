'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface ParticleSystemProps {
  size?: number
  className?: string
}

export default function ParticleSystem({
  size = 480,
  className = '',
}: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 設計思路：模擬粒子系統的動態效果，展示粒子加速和能量波動
    animations.push(
      animate(containerRef.current.querySelectorAll('.particle'), {
        translateX: () => Math.random() * 200 - 100, // 隨機水平移動
        translateY: () => Math.random() * 200 - 100, // 隨機垂直移動
        scale: [0, 1, 0], // 縮放變化
        opacity: [0, 1, 0], // 透明度變化
        duration: 3000, // 3 秒週期
        loop: true,
        delay: stagger(100), // 延遲 100ms，創造隨機效果
        ease: 'inOutQuad', // 二次緩動
      })
    )

    // 為什麼這樣設計：能量波動畫，模擬能量擴散
    animations.push(
      animate(containerRef.current.querySelectorAll('.energy-wave'), {
        scale: [0, 2, 0], // 縮放擴散
        opacity: [0.8, 0, 0], // 透明度變化
        duration: 2000, // 2 秒週期
        loop: true,
        delay: stagger(400), // 延遲 400ms
        ease: 'outQuad', // 二次緩動，加速後減速
      })
    )

    // 關鍵技巧：中心核心脈動動畫，使用 scale 效果
    animations.push(
      animate(containerRef.current.querySelectorAll('.core'), {
        scale: [1, 1.3, 1], // 縮放效果
        opacity: [0.6, 1, 0.6], // 透明度變化
        duration: 1500, // 1.5 秒週期
        loop: true,
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

  const particles = Array.from({ length: 20 }, (_, i) => i)
  const energyWaves = Array.from({ length: 5 }, (_, i) => i)

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
        {/* Center Core */}
        <circle
          className="core"
          cx="160"
          cy="160"
          r="20"
          fill="currentColor"
          fillOpacity="0.6"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Energy Wave */}
        {energyWaves.map((_, index) => (
          <circle
            key={`wave-${index}`}
            className="energy-wave"
            cx="160"
            cy="160"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}

        {/* Particle */}
        {particles.map((_, index) => (
          <circle
            key={`particle-${index}`}
            className="particle"
            cx="160"
            cy="160"
            r="2"
            fill="currentColor"
            opacity="0.7"
          />
        ))}

        {/* Orbit Line */}
        <circle
          cx="160"
          cy="160"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="5,5"
        />
        <circle
          cx="160"
          cy="160"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  )
}
