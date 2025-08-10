/**
 * @deprecated
 * 注意：這似乎是一個舊的首頁內容元件。
 * 這個檔案可能可以被安全地移除。
 */
import React from 'react'

export default function HomeContent() {
  return (
    <main className="flex flex-col gap-8 items-center text-center py-12 min-h-[calc(100vh-theme(space.32))] justify-center">
      <h1 className="text-3xl font-bold">We</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl">
        Welcome come to our website! Here, we explore the intersection of human
        factors, neuroscience, and AI applications. Our mission is to enhance
        human experience through innovative research and technology. Join us on
        this journey of discovery and innovation!
      </p>
    </main>
  )
}
