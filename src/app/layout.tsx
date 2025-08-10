/**
 * @deprecated
 * 注意：這似乎是一個舊的根佈局檔案，目前專案使用的是 /app/layout.tsx。
 * 這個檔案可能可以被安全地移除。
 */
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cogniscient - 認知神經科學與複雜系統人機界面',
  description:
    'Cogniscient 從認知神經科學角度出發，專注於複雜系統人機界面，如直線粒子加速器、大型醫療設備和大規模礦場設施，提供低調科技感的顧問服務。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}
      >
        {children}
      </body>
    </html>
  )
}
