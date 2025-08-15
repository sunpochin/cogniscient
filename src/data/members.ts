export interface Member {
  id: number
  name: string
  role: string
  description: string
  imageUrl: string
}

export const members: Member[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer', // 技術長
    description:
      'With over 15 years of experience in software engineering and team leadership, Sarah drives our technical vision and innovation strategy. She specializes in scalable architecture and emerging technologies.',
    imageUrl: 'https://picsum.photos/seed/sarah1/300/300', // 使用 Picsum 提供的隨機圖片
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Product Designer', // 首席產品設計師
    description:
      'Michael brings a unique blend of creative design and user experience expertise. His work focuses on creating intuitive interfaces that delight users while solving complex business challenges.',
    imageUrl: 'https://picsum.photos/seed/michael2/300/300',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Data Science Director', // 數據科學總監
    description:
      'Emily leads our data analytics and machine learning initiatives. With a PhD in Statistics and 10 years of industry experience, she transforms raw data into actionable business insights.',
    imageUrl: 'https://picsum.photos/seed/emily3/300/300',
  },
]
