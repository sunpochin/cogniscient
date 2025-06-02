'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface ParticleSystemProps {
  size?: number
  className?: string
}

export default function ParticleSystem({
  size = 320,
  className = '',
}: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // 粒子軌道動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.particle'), {
        translateX: () => Math.random() * 200 - 100,
        translateY: () => Math.random() * 200 - 100,
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        duration: 3000,
        loop: true,
        delay: stagger(100),
        ease: 'inOutQuad',
      })
    )

    // 能量波動畫
    animations.push(
      animate(containerRef.current.querySelectorAll('.energy-wave'), {
        scale: [0, 2, 0],
        opacity: [0.8, 0, 0],
        duration: 2000,
        loop: true,
        delay: stagger(400),
        ease: 'outQuad',
      })
    )

    // 中心核心脈動
    animations.push(
      animate(containerRef.current.querySelectorAll('.core'), {
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6],
        duration: 1500,
        loop: true,
        ease: 'inOutSine',
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
        {/* 中心核心 */}
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

        {/* 能量波 */}
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

        {/* 粒子 */}
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

        {/* 軌道線 */}
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
