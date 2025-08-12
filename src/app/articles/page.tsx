import NavBar from '../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "Modern Technology Trends",
      description: "Explore how AI, machine learning, and blockchain are transforming our daily lives. From smart homes to autonomous vehicles, technology is reshaping our future.",
      imageUrl: "https://picsum.photos/seed/tech1/300/200"
    },
    {
      id: 2,
      title: "Importance of Sustainability",
      description: "Climate change is one of the biggest challenges facing the world today. Learn how businesses and individuals can protect our planet through green technology.",
      imageUrl: "https://picsum.photos/seed/green2/300/200"
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "The pandemic accelerated global digital transformation. Discover how cloud computing, remote work, and digital marketing drive business growth.",
      imageUrl: "https://picsum.photos/seed/business3/300/200"
    },
    {
      id: 4,
      title: "Healthy Living Tips",
      description: "Maintaining physical and mental health in modern life. Share practical health management tips and lifestyle recommendations for better well-being.",
      imageUrl: "https://picsum.photos/seed/health4/300/200"
    }
  ]

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Featured Articles
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                
                <div className="p-4 md:p-4">
                  <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 text-xs md:text-xs leading-relaxed mb-3 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <Link 
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                  >
                    Read More
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage