import Image from 'next/image'

interface MemberDetailProps {
  memberId: string
}

const MemberDetail: React.FC<MemberDetailProps> = ({ memberId }) => {
  const memberData: Record<string, { name: string; role: string; bio: string; experience: string; education: string; achievements: string }> = {
    '1': {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: `Sarah Johnson is a visionary technology leader with over 15 years of experience driving innovation in software engineering and artificial intelligence. She holds a Ph.D. in Computer Science from Stanford University, where she specialized in distributed systems and machine learning algorithms.

Before joining Cogniscient, Sarah led the engineering teams at two successful tech startups that were later acquired by Fortune 500 companies. At her previous role as VP of Engineering at DataFlow Technologies, she scaled the engineering team from 12 to over 100 people while maintaining a culture of innovation and technical excellence.

Sarah is passionate about building scalable, reliable systems that can handle millions of users while maintaining high performance. She has been instrumental in architecting cloud-native solutions that have processed over $2 billion in transactions. Her expertise spans multiple programming languages including Python, Go, Java, and TypeScript, with deep knowledge in microservices architecture, Kubernetes, and modern DevOps practices.

As a thought leader in the tech community, Sarah regularly speaks at international conferences including DockerCon, KubeCon, and AWS re:Invent. She has published 12 peer-reviewed papers on distributed computing and holds 3 patents in machine learning optimization techniques.

When she&apos;s not coding or mentoring her team, Sarah enjoys rock climbing, photography, and contributing to open-source projects. She&apos;s also an active mentor for women in tech programs and serves on the advisory board of two tech nonprofits focused on closing the gender gap in STEM fields.`,
      experience: "15+ years in software engineering, 8 years in leadership roles",
      education: "Ph.D. Computer Science, Stanford University; B.S. Computer Engineering, MIT",
      achievements: "3 patents, 12 published papers, speaker at 20+ conferences"
    },
    '2': {
      name: "Michael Chen",
      role: "Lead Product Designer",
      bio: `Michael Chen is an award-winning product designer who brings a unique blend of artistic vision and analytical thinking to every project. With a Master&apos;s degree in Human-Computer Interaction from Carnegie Mellon University and over 10 years of experience in the design industry, Michael has become known for creating intuitive, beautiful interfaces that solve complex user problems.

His design journey began at IDEO, where he worked on groundbreaking products for clients including Apple, Google, and Samsung. There, he mastered the art of design thinking and user-centered design methodologies that continue to influence his work today. Michael later joined Airbnb as a Senior Product Designer, where he led the redesign of the host dashboard that increased user engagement by 40% and reduced support tickets by 25%.

Michael&apos;s design philosophy centers on empathy and data-driven decision making. He believes that great design is invisible – it works so well that users don&apos;t have to think about it. His expertise includes user research, prototyping, design systems, and cross-platform design for web, mobile, and emerging technologies like AR/VR.

At Cogniscient, Michael leads design for AI-powered products, focusing on making complex machine learning systems accessible to everyday users. He&apos;s particularly passionate about ethical AI design and ensuring that AI interfaces are transparent, fair, and inclusive.

Michael&apos;s work has been recognized with a Red Dot Design Award and two Webby Awards. He&apos;s also a frequent contributor to design publications and has spoken at Design+Research, UX Week, and SXSW. Outside of work, Michael is an avid photographer specializing in street photography and urban landscapes. He also teaches design workshops for underrepresented communities and mentors emerging designers through ADPList.`,
      experience: "10+ years in product design, 5 years leading design teams",
      education: "M.S. Human-Computer Interaction, Carnegie Mellon; B.A. Industrial Design, RISD",
      achievements: "Red Dot Design Award, 2x Webby Awards, 50+ design patents"
    },
    '3': {
      name: "Emily Rodriguez",
      role: "Data Science Director",
      bio: `Dr. Emily Rodriguez is a distinguished data scientist and researcher with a Ph.D. in Statistics from UC Berkeley and over 12 years of experience transforming raw data into actionable business insights. Her expertise spans machine learning, statistical modeling, and predictive analytics across various industries including fintech, healthcare, and e-commerce.

Emily&apos;s academic background is complemented by her practical industry experience. She began her career as a quantitative analyst at Goldman Sachs, where she developed algorithmic trading models that generated millions in revenue. She later moved to Netflix as a Senior Data Scientist, where she was instrumental in building the recommendation algorithms that now serve over 230 million subscribers worldwide.

Her technical expertise includes advanced statistical methods, deep learning, natural language processing, and computer vision. Emily is proficient in Python, R, SQL, Scala, and TensorFlow, and has extensive experience with big data technologies like Spark, Hadoop, and cloud platforms including AWS, GCP, and Azure.

At Cogniscient, Emily leads a team of data scientists and ML engineers who develop cutting-edge AI solutions for clients. She&apos;s particularly focused on responsible AI development, ensuring that machine learning models are not only accurate but also fair, interpretable, and robust. Her recent work includes developing fraud detection systems, customer churn prediction models, and natural language understanding systems.

Emily is a published researcher with over 20 papers in top-tier journals and conferences including NIPS, ICML, and KDD. She holds 5 patents in machine learning applications and has been invited to speak at major data science conferences including Strata Data Conference, PyData, and the International Conference on Machine Learning.

Beyond her professional achievements, Emily is passionate about diversity in STEM and serves as a board member for Girls Who Code. She also volunteers as a data science mentor and has taught graduate-level courses at UC Berkeley as an adjunct professor. In her free time, Emily enjoys hiking, cooking, and playing classical piano.`,
      experience: "12+ years in data science, 6 years in leadership roles",
      education: "Ph.D. Statistics, UC Berkeley; M.S. Applied Mathematics, Stanford; B.S. Mathematics, Caltech",
      achievements: "20+ published papers, 5 patents, keynote speaker at 15+ conferences"
    }
  }

  const member = memberData[memberId] || memberData['1']
  // 使用專門的人臉圖片 API
  const imageUrl = `https://images.unsplash.com/photo-${memberId === '1' ? '1494790108755-74b6c3c82bd' : memberId === '2' ? '1507003211169-0a1dd7228f2d' : '1573496359142-b8d87734a5a2'}?w=400&h=400&fit=crop&crop=face`

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src={imageUrl}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
              priority
              unoptimized
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {member.name}
          </h1>
          
          <h2 className="text-xl text-blue-600 font-medium mb-8">
            {member.role}
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none">
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
                <h3 className="font-semibold text-gray-800 mb-1">Achievements</h3>
                <p className="text-gray-600">{member.achievements}</p>
              </div>
            </div>
          </div>
          
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

export default MemberDetail