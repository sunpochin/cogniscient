// 匯入必要的元件和功能
import Image from 'next/image' // Next.js 優化圖片元件
import Link from 'next/link' // Next.js 路由連結元件

/**
 * 文章頁面元件
 * 功能：展示精選文章列表
 * - 使用 Grid 佈局顯示文章卡片
 * - 響應式設計：手機1欄、平板2欄、桌面4欄
 * - 每篇文章支援點擊查看詳細內容
 */
const ArticlesPage = () => {
  // 文章資料陣列
  const articles = [
    {
      id: 1,
      title: "Modern Technology Trends", // 現代科技趨勢
      description: "Explore how AI, machine learning, and blockchain are transforming our daily lives. From smart homes to autonomous vehicles, technology is reshaping our future.",
      imageUrl: "https://picsum.photos/seed/tech1/300/200" // 科技主題圖片
    },
    {
      id: 2,
      title: "Importance of Sustainability", // 永續發展的重要性
      description: "Climate change is one of the biggest challenges facing the world today. Learn how businesses and individuals can protect our planet through green technology.",
      imageUrl: "https://picsum.photos/seed/green2/300/200" // 環保主題圖片
    },
    {
      id: 3,
      title: "Digital Transformation", // 數位轉型
      description: "The pandemic accelerated global digital transformation. Discover how cloud computing, remote work, and digital marketing drive business growth.",
      imageUrl: "https://picsum.photos/seed/business3/300/200" // 商業主題圖片
    },
    {
      id: 4,
      title: "Healthy Living Tips", // 健康生活建議
      description: "Maintaining physical and mental health in modern life. Share practical health management tips and lifestyle recommendations for better well-being.",
      imageUrl: "https://picsum.photos/seed/health4/300/200" // 健康主題圖片
    }
  ]

  // 渲染頁面結構
  return (
    // 文章頁面內容區域
    <div className="bg-white">
      {/* 文章內容區塊 */}
      <section className="py-8 md:py-12 px-4">
        {/* 容器：最大寬度限制並水平居中 */}
        <div className="max-w-7xl mx-auto">
          {/* 頁面標題區域 */}
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Featured Articles
            </h1>
          </header>
          
          {/* 
            文章卡片容器：使用 Grid 佈局實現響應式設計
            - grid-cols-1: 手機版 1 欄
            - sm:grid-cols-2: 小螢幕 2 欄  
            - lg:grid-cols-4: 大螢幕 4 欄
            - gap-4: 統一的間距
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
            {/* 遍歷每篇文章 */}
            {articles.map((article) => (
              /* 文章卡片：使用 article 標籤表示獨立的內容單元 */
              <article 
                key={article.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* 文章特色圖片區域 */}
                <div className="relative h-36 w-full">
                  <Image
                    src={article.imageUrl}
                    alt={`Featured image for article: ${article.title}`} // 無障礙友善的圖片描述
                    fill // 填滿容器
                    className="object-cover" // 保持比例裁切
                    sizes="25vw" // 告訴瀏覽器圖片大小，用於性能優化
                  />
                </div>
                
                {/* 文章資訊區域 */}
                <div className="p-4 md:p-4">
                  {/* 文章標題區域 */}
                  <header className="mb-3">
                    {/* 文章標題：使用 line-clamp-2 限制最多顯示 2 行 */}
                    <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                  </header>
                  
                  {/* 文章描述：使用 line-clamp-3 限制最多顯示 3 行 */}
                  <p className="text-gray-600 text-xs md:text-xs leading-relaxed mb-3 line-clamp-3">
                    {article.description}
                  </p>
                  
                  {/* 
                    文章詳細連結
                    - inline-flex: 內聯彈性佈局
                    - items-center: 垂直居中對齊
                    - transition-colors: 顏色變化動畫
                    - aria-label: 無障礙標籤，提供更詳細的描述
                  */}
                  <Link 
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    aria-label={`Read full article: ${article.title}`}
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
    </div>
  )
}

export default ArticlesPage