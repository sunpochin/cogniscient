'use client'
import { animate, createScope, Scope } from 'animejs'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import MechanicalDevice from '@/components/MechanicalDevice'
import ParticleSystem from '@/components/ParticleSystem'
import NeuralNetwork from '@/components/NeuralNetwork'
import MedicalDevice from '@/components/MedicalDevice'
import IndustrialControl from '@/components/IndustrialControl'
import QuantumComputing from '@/components/QuantumComputing'
import SatelliteComm from '@/components/SatelliteComm'
import DNAAnalysis from '@/components/DNAAnalysis'
import RadarSystem from '@/components/RadarSystem'
import HologramProjection from '@/components/HologramProjection'
import AISimulation from '@/components/AISimulation'
import VRInterface from '@/components/VRInterface'
import EnergyGrid from '@/components/EnergyGrid'
import BiotechLab from '@/components/BiotechLab'

export default function Home() {
  const root = useRef(null)
  const scope = useRef<Scope | null>(null)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    scope.current = createScope({ root }).add(self => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      self.add('rotateLogo', i => {
        animate('.logo', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        })
      })
    })

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      if (scope.current) {
        scope.current.revert()
      }
    }
  }, [])

  // 渲染不同標籤頁的內容
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-4xl">
              From a cognitive neuroscience perspective, we focus on the
              human-machine interface design of complex systems, such as linear
              particle accelerators, large medical devices, and large-scale oil
              drilling facilities. We provide low-key tech solutions to help
              clients optimize human-machine interactions.
            </p>

            {/* 複雜機械 3D 旋轉裝置 */}
            <MechanicalDevice size={320} />

            <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/contact"
              >
                聯絡我們
              </a>
            </div>

            {/* Hero Section */}
            <section className="bg-black text-white w-full rounded-lg p-12 mt-12">
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-blue-300 hero-text mb-6">
                  {'COGNITIVE INTERFACE'.split('').map((letter, index) => (
                    <span key={index} className="inline-block opacity-0">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-400 max-w-xl text-lg">
                  Applying neuroscience to the world's most complex
                  human-machine systems.
                </p>
              </div>

              {/* Use Cases Section */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-blue-200">
                    Linear Particle Accelerators
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Optimizing operator cognition under extreme conditions.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-blue-200">
                    Advanced Medical Devices
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Designing intuitive UIs for complex diagnostic workflows.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <h2 className="text-xl font-semibold text-blue-200">
                    Oil Drilling Systems
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Enhancing decision support for remote operations.
                  </p>
                </div>
              </div>
            </section>
          </main>
        )
      case 'mechanical':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Mechanical Device Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Complex mechanical system 3D rotation animation, demonstrating
              multi-level mechanical operation principles, suitable for
              industrial control systems and precision equipment human-machine
              interface design.
            </p>
            <MechanicalDevice size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <MechanicalDevice size={200} />
              <MechanicalDevice size={200} />
              <MechanicalDevice size={200} />
            </div> */}
          </main>
        )
      case 'particle':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Particle System Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Simulate particle accelerators and high-energy physics experiments
              with dynamic visual effects, demonstrating particle trajectories,
              energy fluctuations, and core reaction processes.
            </p>
            <ParticleSystem size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <ParticleSystem size={200} />
              <ParticleSystem size={200} />
              <ParticleSystem size={200} />
            </div> */}
          </main>
        )
      case 'neural':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Neural Network Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Visualize the signal transmission process of neural networks,
              demonstrating the application of cognitive science in
              human-machine interface design, suitable for AI-assisted decision
              systems.
            </p>
            <NeuralNetwork size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <NeuralNetwork size={300} />
              <NeuralNetwork size={300} />
            </div> */}
          </main>
        )
      case 'medical':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Medical Device Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Simulate real-time data display of medical monitoring devices,
              including ECG, vital signs monitoring, and diagnostic scanning
              systems' dynamic interfaces.
            </p>
            <MedicalDevice size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <MedicalDevice size={200} />
              <MedicalDevice size={200} />
              <MedicalDevice size={200} />
            </div> */}
          </main>
        )
      case 'industrial':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Industrial Control Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Demonstrate the control interface of industrial automation
              systems, including pipeline fluid monitoring, pressure and
              temperature detection, and valve control systems' dynamic
              visualization.
            </p>
            <IndustrialControl size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <IndustrialControl size={300} />
              <IndustrialControl size={300} />
            </div> */}
          </main>
        )
      case 'quantum':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Quantum Computing Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Visualize quantum bits, quantum entanglement, and quantum gate
              operations, suitable for quantum computing research and high-end
              scientific computing system human-machine interface design.
            </p>
            <QuantumComputing size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <QuantumComputing size={200} />
              <QuantumComputing size={200} />
              <QuantumComputing size={200} />
            </div> */}
          </main>
        )
      case 'satellite':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">
              Satellite Communication Animation
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Simulate satellite orbit operation, signal transmission, and
              ground station communication dynamic effects, demonstrating the
              operation principles of global communication networks and space
              communication systems.
            </p>
            <SatelliteComm size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <SatelliteComm size={300} />
              <SatelliteComm size={300} />
            </div> */}
          </main>
        )
      case 'dna':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">DNA Analysis Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Visualize DNA double helix structure, gene sequence analysis, and
              protein synthesis processes, suitable for biomedical research
              equipment and genetic engineering system interfaces.
            </p>
            <DNAAnalysis size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <DNAAnalysis size={200} />
              <DNAAnalysis size={200} />
              <DNAAnalysis size={200} />
            </div> */}
          </main>
        )
      case 'radar':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Radar System Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Demonstrate radar scanning, target detection, and tracking
              systems' real-time dynamic effects, suitable for military defense,
              aviation control, and maritime monitoring system interfaces.
            </p>
            <RadarSystem size={400} />
            {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
              <RadarSystem size={300} />
              <RadarSystem size={300} />
            </div> */}
          </main>
        )
      case 'hologram':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">
              Hologram Projection Animation
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Simulate 3D hologram image projection, beam projection, and
              stereoscopic display effects, demonstrating future display
              technology and virtual reality system visual interfaces.
            </p>
            <HologramProjection size={400} />
            {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
              <HologramProjection size={200} />
              <HologramProjection size={200} />
              <HologramProjection size={200} />
            </div> */}
          </main>
        )
      case 'ai-sim':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">AI Simulation Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Visualize the signal transmission process of neural networks,
              demonstrating the application of cognitive science in
              human-machine interface design.
            </p>
            <AISimulation size={400} />
          </main>
        )
      case 'vr-interface':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">VR Interface Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Demonstrate VR interface interactions with scaling and flashing
              effects.
            </p>
            <VRInterface size={400} />
          </main>
        )
      case 'energy-grid':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Energy Grid Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Show energy flow in a grid with pulsing lines.
            </p>
            <EnergyGrid size={400} />
          </main>
        )
      case 'biotech-lab':
        return (
          <main className="flex flex-col gap-8 items-center text-center py-12">
            <h1 className="text-3xl font-bold">Biotech Lab Animation</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Visualize molecular structures rotating and scaling.
            </p>
            <BiotechLab size={400} />
          </main>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div
        ref={root}
        className="bg-gray-500 container mx-auto px-4 py-8 font-[family-name:var(--font-geist-sans)]"
      >
        {renderTabContent()}
      </div>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 py-8">
        © 2025 WL Consulting
      </footer>
    </div>
  )
}
