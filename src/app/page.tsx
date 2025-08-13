/**
 * Cogniscient 首頁元件
 *
 * 功能描述：
 * - 企業官網的主要入口頁面
 * - 展示公司簡介、服務項目、團隊介紹等核心內容
 * - 使用模組化設計，將不同區塊分為獨立元件
 * - 支援響應式設計，適配各種螢幕尺寸
 *
 * 技術特色：
 * - 使用 Next.js App Router 架構
 * - 語義化 HTML 標籤提升 SEO 效果
 * - Tailwind CSS 實現現代化樣式
 * - Material-UI 元件增強使用者體驗
 */

// 指定為客戶端元件，可使用瀏覽器 API 和 React hooks
'use client'

// 匯入類型和基礎元件
import type { NextPage } from 'next' // Next.js 頁面元件類型
import { Box } from '@mui/material' // Material-UI 容器元件（保留以防需要）
import Image from 'next/image' // Next.js 優化圖片元件

// 匯入導覽和佈局元件
import NavBar from '../components/Navbar' // 頂部導覽列
import SideDecoration from '../components/SideDecoration' // 右側裝飾圖案
import WelcomeOverlay from '../components/WelcomeOverlay' // 歡迎覆蓋層
import GameOfLifeLogo from '../components/GameOfLifeLogo' // 生命遊戲動畫 Logo

// 匯入內容區塊元件
import AboutCogniscient from '../components/AboutCogniscient' // 公司簡介區塊
import WhatIsAIUX from '../components/WhatIsAIUX' // AI-UX 介紹區塊
import WhoAreAIUXFor from '../components/WhoAreAIUXFor' // 目標客群區塊
import StartYourJourney from '../components/StartYourJourney' // 開始旅程區塊
import OurServices from '../components/OurServices' // 服務項目區塊
import WhoAreWe from '../components/WhoAreWe' // 團隊介紹區塊
import ContactForm from '../components/ContactForm' // 聯絡表單區塊

// 註解掉的元件（保留以供未來使用）
// import ClientStoriesCarousel from '../components/client-stories-carousel'; // 客戶故事輪播

/**
 * 首頁主元件
 * 負責整合所有頁面區塊，建立完整的企業官網首頁
 */
const HomePage: NextPage = () => {
  return (
    /*
      主要內容容器
      - main: 語義化標籤，標示頁面主要內容
      - w-full: 佔滿整個寬度
      - relative: 相對定位，為絕對定位的子元素提供參考點
      - text-left: 文字左對齊
      - text-[1.111rem]: 自定義字體大小
      - text-[#000]: 黑色文字
      - bg-gray-50: 淺灰色背景，統一全站風格
    */
    <main className="w-full relative text-left text-[1.111rem] text-[#000] bg-white">
      {/* 歡迎頁面覆蓋層 - 可能包含載入動畫或歡迎訊息 */}
      <WelcomeOverlay />

      {/*
        頁首區域
        - header: 語義化標籤，表示頁面頂部區域
        - relative z-10: 確保導覽列顯示在其他元件之上
      */}
      <header className="relative z-10">
        <NavBar />
      </header>

      {/* 未來功能：客戶故事輪播區塊（目前註解掉）*/}
      {/* <section className="mt-80">
        <ClientStoriesCarousel />
      </section> */}

      {/*
        右側裝飾圖案
        - z-1: 較低的層級，作為背景裝飾
        - 提供視覺美感，不影響內容閱讀
      */}
      <div className="z-1">
        <SideDecoration />
      </div>

      {/*
        公司 Logo
        - absolute: 絕對定位，固定在頁面左上角
        - top-[3rem] left-[1rem]: 精確的位置設定
        - w-[10.556rem] h-[10.556rem]: 自定義尺寸
        - object-cover: 保持圖片比例並填滿容器
      */}
      <Image
        className="absolute top-[3rem] left-[1rem] w-[10.556rem] h-[10.556rem] object-cover"
        width={190}
        height={190}
        sizes="100vw"
        alt="Cogniscient company logo" // 無障礙替代文字
        src="/cogniscient.png"
      />

      {/*
        Game of Life Logo 區塊
        - mt-40: 頂部間距
        - flex justify-center: 水平居中對齊
        - 提供動態視覺效果，吸引用戶注意
      */}
      <section className="mt-40 flex justify-center">
        <GameOfLifeLogo />
      </section>

      {/*
        公司簡介區塊
        - mt-40: 與上方區塊的間距
        - ml-20 mr-14: 左右邊距，創造視覺呼吸感
        - relative z-10: 確保內容顯示在背景裝飾之上
      */}
      <section className="mt-40 ml-20 mr-14 relative z-10">
        <AboutCogniscient />
      </section>

      {/*
        AI-UX 介紹區塊
        - w-3/4: 寬度為父容器的 3/4
        - ml-auto: 左邊距自動，實現右對齊效果
        - 與左對齊的區塊形成視覺對比
      */}
      <section className="mt-20 w-3/4 ml-auto mr-14 relative z-10">
        <WhatIsAIUX />
      </section>

      {/* 目標客群介紹區塊 - 左對齊設計 */}
      <section className="mt-20 ml-20 mr-14 relative z-10">
        <WhoAreAIUXFor />
      </section>

      {/* 開始旅程區塊 - 右對齊設計 */}
      <section className="mt-20 w-3/4 ml-auto mr-14 relative z-10">
        <StartYourJourney />
      </section>

      {/*
        服務項目區塊
        - id="services": 提供錨點連結，支援導覽列直接跳轉
        - 重要的商業資訊區塊
      */}
      <section id="services" className="mt-20 ml-20 mr-14 relative z-10">
        <OurServices />
      </section>

      {/* 團隊介紹區塊 - 右對齊設計 */}
      <section className="mt-20 w-3/4 ml-auto mr-14 relative z-10">
        <WhoAreWe />
      </section>

      {/*
        聯絡表單區塊
        - id="contact": 提供錨點連結，支援導覽列直接跳轉
        - 放在頁面底部，引導用戶進行互動
        - 不設定額外邊距，讓表單元件自行控制佈局
      */}
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  )
}

export default HomePage
