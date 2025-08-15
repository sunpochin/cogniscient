// 導入 Next.js 的 Image 元件和 Member 型別
import Image from 'next/image'
import { Member } from '@/data/members'

// 定義 MemberDetail 元件的 props 介面，接收一個完整的 member 物件
interface MemberDetailProps {
  member: Member
}

// MemberDetail 元件：現在是一個純粹的 UI 元件，負責渲染傳入的成員資料
const MemberDetail: React.FC<MemberDetailProps> = ({ member }) => {
  // 如果沒有傳入 member 資料，可以選擇顯示一個提示或返回 null
  if (!member) {
    return <div>Member not found.</div>
  }

  // 返回 JSX 結構來渲染頁面
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 頭像、姓名和職位區塊 */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            {/* 成員頭像 */}
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
              priority // 優先加載此圖片
              unoptimized
            />
          </div>

          {/* 成員姓名 */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {member.name}
          </h1>

          {/* 成員職位 */}
          <h2 className="text-xl text-blue-600 font-medium mb-8">
            {member.role}
          </h2>
        </div>

        {/* 主要內容區塊 */}
        <div className="prose prose-lg max-w-none">
          {/* 經驗、學歷、成就摘要區塊 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Experience</h3>
                <p className="text-gray-600">{member.experience}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Education</h3>
                <p className="text-gray-600">{member.education}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Achievements
                </h3>
                <p className="text-gray-600">{member.achievements}</p>
              </div>
            </div>
          </div>

          {/* 成員簡介，將換行符轉換為段落 */}
          {member.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

// 導出 MemberDetail 元件
export default MemberDetail
