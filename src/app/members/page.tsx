// 匯入必要的元件和功能
import NavBar from '@/components/Navbar' // 導覽列元件
import Image from 'next/image' // Next.js 優化圖片元件
import Link from 'next/link' // Next.js 路由連結元件
import { members } from '@/data/members' // 從獨立的資料檔案匯入成員資料

/**
 * 團隊成員頁面元件
 * 功能：展示公司團隊成員資訊
 * - 使用 Flexbox 實現響應式佈局
 * - 每個成員以卡片形式展示
 * - 支援點擊查看詳細資訊
 */
const MembersPage = () => {
  // 渲染頁面結構
  return (
    // 主要內容區域，使用語義化的 main 標籤
    <main className="bg-white min-h-screen">
      {/* 導覽列 */}
      <NavBar />

      {/* 團隊成員內容區塊 */}
      <section className="py-8 md:py-12 px-4">
        {/* 容器：最大寬度限制並水平居中 */}
        <div className="max-w-6xl mx-auto">
          {/* 頁面標題區域 */}
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Team Members
            </h1>
          </header>

          {/*
            成員卡片容器：使用 Flexbox 實現響應式佈局
            - flex flex-wrap: 允許換行的彈性佈局
            - justify-center: 內容居中對齊
            - gap-6: 統一的間距
          */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* 遍歷每個團隊成員 */}
            {members.map(member => (
              /*
                成員卡片：使用 article 標籤表示獨立的內容單元
                響應式寬度設定：
                - w-full: 手機版佔滿寬度
                - sm:w-80: 小螢幕 320px
                - md:w-72: 中等螢幕 288px
                - lg:w-80: 大螢幕 320px
                - max-w-sm: 最大寬度限制
                - flex-shrink-0: 防止卡片被擠壓
              */
              <article
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-80 md:w-72 lg:w-80 max-w-sm flex-shrink-0"
              >
                {/* 成員照片區域 */}
                <div className="relative h-48 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`} // 無障礙友善的圖片描述
                    fill // 填滿容器
                    className="object-cover" // 保持比例裁切
                    sizes="33vw" // 告訴瀏覽器圖片大小，用於性能優化
                  />
                </div>

                {/* 成員資訊區域 */}
                <div className="p-4 md:p-6">
                  {/* 成員標題資訊 */}
                  <header className="mb-3">
                    {/* 成員姓名 */}
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h2>

                    {/* 職位 */}
                    <h3 className="text-blue-600 font-medium text-sm">
                      {member.role}
                    </h3>
                  </header>

                  {/* 成員描述：使用 line-clamp-4 限制顯示行數 */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {member.description}
                  </p>

                  {/*
                    詳細資訊連結
                    - inline-flex: 內聯彈性佈局
                    - items-center: 垂直居中對齊
                    - transition-colors: 顏色變化動畫
                    - aria-label: 無障礙標籤
                  */}
                  <Link
                    href={`/members/${member.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    aria-label={`Read more about ${member.name}`}
                  >
                    Read More
                    {/* 右箭頭圖標 */}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true" // 對螢幕閱讀器隱藏裝飾性圖標
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MembersPage
