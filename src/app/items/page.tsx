import Image from 'next/image'
import Link from 'next/link'
import { items } from './data'

const ItemsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Featured Items
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              
              <div className="p-4 md:p-4">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h2>
                
                <p className="text-gray-600 text-xs md:text-xs leading-relaxed mb-3 line-clamp-3">
                  {item.description}
                </p>
                
                <Link 
                  href={`/items/${item.id}`}
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
  )
}

export default ItemsPage
