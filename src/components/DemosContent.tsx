import React from 'react'

export default function DemosContent() {
  return (
    <main className="flex flex-col gap-8 items-center text-center py-12 min-h-[calc(100vh-theme(space.32))] justify-center">
      <h1 className="text-3xl font-bold">Demos</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
        Here you can find various demos showcasing the applications of human
        factors, neuroscience, and AI. These demos illustrate how our research
        and technology can be applied to real-world scenarios, enhancing human
        experience and solving complex problems. Explore the demos to see our
        work in action and understand the potential of integrating these fields.
      </p>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/2woNdScDUgM"
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  )
}
