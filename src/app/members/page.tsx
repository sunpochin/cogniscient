import NavBar from '../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const MembersPage = () => {
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      description: "With over 15 years of experience in software engineering and team leadership, Sarah drives our technical vision and innovation strategy. She specializes in scalable architecture and emerging technologies.",
      imageUrl: "https://picsum.photos/seed/sarah1/300/300"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Product Designer",
      description: "Michael brings a unique blend of creative design and user experience expertise. His work focuses on creating intuitive interfaces that delight users while solving complex business challenges.",
      imageUrl: "https://picsum.photos/seed/michael2/300/300"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Science Director",
      description: "Emily leads our data analytics and machine learning initiatives. With a PhD in Statistics and 10 years of industry experience, she transforms raw data into actionable business insights.",
      imageUrl: "https://picsum.photos/seed/emily3/300/300"
    }
  ]

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Our Team Members
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                
                <div className="p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h2>
                  
                  <h3 className="text-blue-600 font-medium text-sm mb-3">
                    {member.role}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {member.description}
                  </p>
                  
                  <Link 
                    href={`/members/${member.id}`}
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

export default MembersPage