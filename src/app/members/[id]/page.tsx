// 匯入必要的元件和資料
import NavBar from '@/components/Navbar'
import MemberDetail from '@/components/MemberDetail'
import Link from 'next/link'
import { members } from '@/data/members'
import { notFound } from 'next/navigation'

// 定義頁面 props 類型
interface MemberPageProps {
  params: { id: string }
}

/**
 * 成員詳細頁面
 * 功能：根據 URL 的 id，從資料來源找到對應的成員並顯示其詳細資訊
 */
const MemberPage: React.FC<MemberPageProps> = ({ params }) => {
  const memberId = parseInt(params.id, 10)
  const member = members.find(m => m.id === memberId)

  // 如果找不到對應的成員，顯示 404 頁面
  if (!member) {
    notFound()
  }

  return (
    // 主要內容區域
    <main className="bg-white min-h-screen">
      {/* 導覽列 */}
      <NavBar />

      {/* 成員詳細內容，傳入完整的 member 物件 */}
      <section className="py-8">
        <MemberDetail member={member} />
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

// (可選) 產生靜態頁面，有利於 SEO 和性能
export async function generateStaticParams() {
  return members.map(member => ({
    id: member.id.toString(),
  }))
}