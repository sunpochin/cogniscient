// 匯入必要的元件
import NavBar from '../../../components/Navbar' // 導覽列元件
import MemberDetail from '../../../components/MemberDetail' // 成員詳細資訊元件
import Link from 'next/link' // Next.js 路由連結

// 定義頁面 props 類型
interface MemberPageProps {
  params: Promise<{ id: string }>
}

/**
 * 成員詳細頁面
 * 功能：顯示單一成員的詳細資訊
 * - 統一背景色設計
 * - 包含返回成員列表的連結
 */
const MemberPage: React.FC<MemberPageProps> = async ({ params }) => {
  const resolvedParams = await params
  const memberId = resolvedParams.id

  return (
    // 主要內容區域，統一使用 bg-gray-50 背景
    <main className="bg-white min-h-screen">
      {/* 導覽列 */}
      <NavBar />
      
      {/* 成員詳細內容 */}
      <section className="py-8">
        <MemberDetail memberId={memberId} />
      </section>
      
      {/* 返回上一頁連結 */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/members"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
            aria-label="Back to team members page"
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
            Back to Team Members
          </Link>
        </div>
      </section>
    </main>
  )
}

export default MemberPage