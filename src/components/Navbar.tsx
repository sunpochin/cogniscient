// 指定此元件為客戶端元件，可以使用 React hooks 和瀏覽器 API
'use client'

// 匯入必要的 React hooks 和元件
import { useState } from 'react' // 用於管理元件狀態
import { Box } from '@mui/material' // Material-UI 的容器元件
import type { FC } from 'react' // TypeScript 函式元件型別
import Link from 'next/link' // Next.js 的路由連結元件

// 定義 NavBar 元件的 props 型別
export type NavBarType = {
  className?: string // 可選的 CSS 類別名稱
}

// 定義導覽連結的陣列
const navLinks = [
  { label: 'About Us', href: '/' }, // 關於我們 - 首頁
  { label: 'Services', href: '/#services' }, // 服務項目 - 錨點連結
  { label: 'Members', href: '/members' }, // 團隊成員頁面
  { label: 'Articles', href: '/articles' }, // 文章列表頁面
  { label: 'Contact Us', href: '/#contact' }, // 聯絡我們 - 錨點連結
]

/**
 * 響應式導覽列元件
 * 功能：
 * - 桌面端（md 以上）：顯示水平導覽選單
 * - 手機端（md 以下）：顯示漢堡選單按鈕和下拉式選單
 * - 支援鍵盤操作和無障礙功能
 */
const NavBar: FC<NavBarType> = ({ className = '' }) => {
  // 管理手機選單的開關狀態
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 切換選單開關狀態的函式
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // 關閉選單的函式
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // 渲染導覽列元件
  return (
    <Box
      component="header" // 使用語義化的 header HTML 標籤
      className={`w-full flex justify-end items-center px-4 sm:px-8 py-4 bg-transparent relative ${className}`}
      // 樣式說明：全寬度、flex 佈局、兩端對齊、垂直居中、響應式內邊距、白色背景、相對定位
    >
      {/* 左側：品牌 Logo 區域（佔位用，可以之後加入實際 Logo）*/}
      {/* <div className="flex items-center">
        <Link href="/">
          <div className="text-xl font-bold text-black cursor-pointer">
            Cogniscient
          </div>
        </Link>
      </div> */}

      {/* 右側：桌面端選單（中等螢幕以上顯示）*/}
      <nav className="hidden md:flex items-center justify-end space-x-8 mr-18 text-lg">
        {/* 在小於 md 斷點時隱藏，大於等於 md 時顯示為 flex */}
        {navLinks.map(link => (
          <Link href={link.href} key={link.label}>
            {/* Next.js 路由連結，使用 label 作為唯一識別 key */}
            <div className="font-semibold cursor-pointer text-black hover:text-blue-600 transition-colors">
              {/* 樣式：粗體、手型游標、黑色文字、hover 變藍色、顏色漸變效果 */}
              {link.label}
            </div>
          </Link>
        ))}
      </nav>

      {/* 右側：手機端選單按鈕（中等螢幕以下顯示）*/}
      <div className="md:hidden">
        {/* 只在小於 md 斷點時顯示 */}
        <button
          onClick={toggleMenu} // 點擊時切換選單開關
          aria-label="Open menu" // 無障礙標籤，供螢幕閱讀器使用
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          // 樣式：內邊距、圓角、移除預設 outline、focus 時顯示灰色邊框
        >
          {/* SVG 圖示：漢堡選單 / X 關閉圖示 */}
          <svg
            className="w-6 h-6" // 尺寸：寬高各 24px
            fill="none" // 無填充色
            stroke="currentColor" // 邊線使用當前文字色
            viewBox="0 0 24 24" // SVG 視窗範圍
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round" // 線條端點圓滑
              strokeLinejoin="round" // 線條接合處圓滑
              strokeWidth={2} // 線條粗細
              // 根據選單狀態切換圖示：開啟時顯示 X，關閉時顯示三條線
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      {/* 手機端下拉選單（條件渲染）*/}
      {isMenuOpen && (
        // 只有在選單開啟時才渲染
        <div className="md:hidden absolute top-full right-2 w-30 bg-blue-200 shadow-lg z-10 ">
          {/* 樣式：大於 md 時隱藏、絕對定位在父元件下方、白色背景、陰影、高層級 */}
          <nav className="flex flex-col items-center space-y-4 py-4">
            {/* 垂直排列、置中對齊、垂直間距、上下內邊距 */}
            {navLinks.map(link => (
              <Link href={link.href} key={link.label}>
                <div
                  className="font-semibold cursor-pointer text-black hover:text-blue-600 transition-colors"
                  onClick={closeMenu} // 點擊連結後關閉選單，提升用戶體驗
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </Box>
  )
}

// 匯出 NavBar 元件作為預設匯出
export default NavBar
