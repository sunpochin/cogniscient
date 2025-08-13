// 匯入必要的元件
import ArticleDetail from '@/components/ArticleDetail' // 文章詳細資訊元件
import Link from 'next/link' // Next.js 路由連結

// 定義頁面 props 類型
interface ArticlePageProps {
  params: Promise<{ id: string }>
}

/**
 * 文章詳細頁面
 * 功能：顯示單篇文章的詳細內容
 * - 統一背景色設計
 * - 包含返回文章列表的連結
 */
const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const resolvedParams = await params
  const articleId = resolvedParams.id

  return (
    // 文章詳細頁面內容區域
    <div className="bg-white">
      {/* 文章詳細內容 */}
      <section className="py-8">
        <ArticleDetail articleId={articleId} />
      </section>

      {/* 返回上一頁連結 */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
            aria-label="Back to articles list page"
          >
            {/* 左箭頭圖標 */}
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Articles
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage
