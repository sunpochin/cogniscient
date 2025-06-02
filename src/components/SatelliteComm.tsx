'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

interface SatelliteCommProps {
  size?: number
  className?: string
}

export default function SatelliteComm({
  size = 480,
  className = '',
}: SatelliteCommProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const animations: ReturnType<typeof animate>[] = []

    // Satellite orbit rotation
    animations.push(
      animate(containerRef.current.querySelectorAll('.satellite'), {
        rotate: 360,
        duration: 8000,
        loop: true,
        ease: 'linear',
      })
    )

    // Signal wave animation
    animations.push(
      animate(containerRef.current.querySelectorAll('.signal-wave'), {
        scale: [0, 3, 0],
        opacity: [0.8, 0, 0],
        duration: 2000,
        loop: true,
        delay: stagger(400),
        ease: 'outQuad',
      })
    )

    // Data transmission animation
    animations.push(
      animate(containerRef.current.querySelectorAll('.data-packet'), {
        translateY: [-50, 50],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        duration: 1500,
        loop: true,
        delay: stagger(300),
        ease: 'inOutQuad',
      })
    )

    // Ground station antenna rotation
    animations.push(
      animate(containerRef.current.querySelectorAll('.antenna'), {
        rotate: [0, 45, 0],
        duration: 4000,
        loop: true,
        ease: 'inOutSine',
      })
    )

    // Orbit path flashing
    animations.push(
      animate(containerRef.current.querySelectorAll('.orbit-path'), {
        strokeDashoffset: [100, 0],
        opacity: [0.3, 0.7, 0.3],
        duration: 3000,
        loop: true,
        ease: 'linear',
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
        {/* Earth */}
        <circle
          cx="160"
          cy="160"
          r="60"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.1"
          opacity="0.6"
        />

        {/* Satellite orbit */}
        <circle
          className="orbit-path"
          cx="160"
          cy="160"
          r="100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
          strokeDasharray="5,5"
        />
        <circle
          className="orbit-path"
          cx="160"
          cy="160"
          r="130"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          strokeDasharray="3,3"
        />

        {/* Satellite */}
        <g className="satellite" style={{ transformOrigin: '160px 160px' }}>
          <rect
            x="155"
            y="60"
            width="10"
            height="8"
            fill="currentColor"
            opacity="0.8"
          />
          {/* Solar panel */}
          <rect
            x="150"
            y="58"
            width="20"
            height="3"
            fill="currentColor"
            opacity="0.6"
          />
          <rect
            x="150"
            y="69"
            width="20"
            height="3"
            fill="currentColor"
            opacity="0.6"
          />
        </g>

        <g className="satellite" style={{ transformOrigin: '160px 160px' }}>
          <rect
            x="155"
            y="30"
            width="10"
            height="8"
            fill="currentColor"
            opacity="0.8"
          />
          {/* Solar panel */}
          <rect
            x="150"
            y="28"
            width="20"
            height="3"
            fill="currentColor"
            opacity="0.6"
          />
          <rect
            x="150"
            y="39"
            width="20"
            height="3"
            fill="currentColor"
            opacity="0.6"
          />
        </g>

        {/* Ground station */}
        <g>
          {/* Ground station base */}
          <rect
            x="50"
            y="250"
            width="30"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.3"
          />
          {/* Antenna */}
          <path
            className="antenna"
            d="M65,250 Q65,240 75,240"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            style={{ transformOrigin: '65px 250px' }}
          />
        </g>

        <g>
          {/* Ground station base */}
          <rect
            x="240"
            y="250"
            width="30"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.3"
          />
          {/* Antenna */}
          <path
            className="antenna"
            d="M255,250 Q255,240 245,240"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            style={{ transformOrigin: '255px 250px' }}
          />
        </g>

        {/* Signal wave */}
        {[0, 1, 2].map(index => (
          <circle
            key={`signal-wave-${index}`}
            className="signal-wave"
            cx="65"
            cy="250"
            r="20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        ))}

        {[0, 1, 2].map(index => (
          <circle
            key={`signal-wave-2-${index}`}
            className="signal-wave"
            cx="255"
            cy="250"
            r="20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        ))}

        {/* Data packet transmission */}
        {[0, 1, 2, 3].map(index => (
          <circle
            key={`data-packet-${index}`}
            className="data-packet"
            cx="160"
            cy="160"
            r="3"
            fill="currentColor"
            opacity="0.7"
          />
        ))}

        {/* Communication connection line */}
        <line
          x1="65"
          y1="250"
          x2="160"
          y2="60"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="2,2"
        />
        <line
          x1="255"
          y1="250"
          x2="160"
          y2="30"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="2,2"
        />

        {/* Label */}
        <text
          x="160"
          y="20"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Satellite Communication Network
        </text>
        <text
          x="65"
          y="290"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Ground Station A
        </text>
        <text
          x="255"
          y="290"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Ground Station B
        </text>
        <text
          x="160"
          y="310"
          textAnchor="middle"
          className="text-xs fill-current opacity-60"
        >
          Global Communication Coverage
        </text>
      </svg>
    </div>
  )
}
