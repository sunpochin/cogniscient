import React from 'react'

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white w-full rounded-lg p-12 mt-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-blue-300 hero-text mb-6">
            {'COGNITIVE INTERFACE'.split('').map((letter, index) => (
              <span key={index} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <p className="max-w-xl text-lg">
            From a cognitive neuroscience perspective, we focus on the
            human-machine interface design of complex systems, such as linear
            particle accelerators, large medical devices, and large-scale oil
            drilling facilities. We provide high quality tech solutions to help
            clients optimize human-machine interactions.
          </p>
          <p className="text-gray-400 max-w-xl text-lg">
            {' '}
            Applying neuroscience to the world&apos;s most complex human-machine
            systems.
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
    </>
  )
}

export default HeroSection
