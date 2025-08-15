export interface Member {
  id: number
  name: string
  role: string
  description: string
  imageUrl: string
  bio: string
  experience: string
  education: string
  achievements: string
}

export const members: Member[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    description:
      'With over 15 years of experience in software engineering and team leadership, Sarah drives our technical vision and innovation strategy. She specializes in scalable architecture and emerging technologies.',
    imageUrl: '/hassan-khan-EGVccebWodM-unsplash.jpg',
    bio: `Sarah Johnson is a visionary technology leader with over 15 years of experience driving innovation in software engineering and artificial intelligence. She holds a Ph.D. in Computer Science from Stanford University, where she specialized in distributed systems and machine learning algorithms.\n\nBefore joining Cogniscient, Sarah led the engineering teams at two successful tech startups that were later acquired by Fortune 500 companies. At her previous role as VP of Engineering at DataFlow Technologies, she scaled the engineering team from 12 to over 100 people while maintaining a culture of innovation and technical excellence.\n\nSarah is passionate about building scalable, reliable systems that can handle millions of users while maintaining high performance. She has been instrumental in architecting cloud-native solutions that have processed over $2 billion in transactions. Her expertise spans multiple programming languages including Python, Go, Java, and TypeScript, with deep knowledge in microservices architecture, Kubernetes, and modern DevOps practices.\n\nAs a thought leader in the tech community, Sarah regularly speaks at international conferences including DockerCon, KubeCon, and AWS re:Invent. She has published 12 peer-reviewed papers on distributed computing and holds 3 patents in machine learning optimization techniques.\n\nWhen she&apos;s not coding or mentoring her team, Sarah enjoys rock climbing, photography, and contributing to open-source projects. She&apos;s also an active mentor for women in tech programs and serves on the advisory board of two tech nonprofits focused on closing the gender gap in STEM fields.`,
    experience:
      '15+ years in software engineering, 8 years in leadership roles',
    education:
      'Ph.D. Computer Science, Stanford University; B.S. Computer Engineering, MIT',
    achievements: '3 patents, 12 published papers, speaker at 20+ conferences',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Product Designer',
    description:
      'Michael brings a unique blend of creative design and user experience expertise. His work focuses on creating intuitive interfaces that delight users while solving complex business challenges.',
    imageUrl: '/michael-Chen.jpg',
    bio: `Michael Chen is an award-winning product designer who brings a unique blend of artistic vision and analytical thinking to every project. With a Master&apos;s degree in Human-Computer Interaction from Carnegie Mellon University and over 10 years of experience in the design industry, Michael has become known for creating intuitive, beautiful interfaces that solve complex user problems.\n\nHis design journey began at IDEO, where he worked on groundbreaking products for clients including Apple, Google, and Samsung. There, he mastered the art of design thinking and user-centered design methodologies that continue to influence his work today. Michael later joined Airbnb as a Senior Product Designer, where he led the redesign of the host dashboard that increased user engagement by 40% and reduced support tickets by 25%.\n\nMichael&apos;s design philosophy centers on empathy and data-driven decision making. He believes that great design is invisible – it works so well that users don&apos;t have to think about it. His expertise includes user research, prototyping, design systems, and cross-platform design for web, mobile, and emerging technologies like AR/VR.\n\nAt Cogniscient, Michael leads design for AI-powered products, focusing on making complex machine learning systems accessible to everyday users. He&apos;s particularly passionate about ethical AI design and ensuring that AI interfaces are transparent, fair, and inclusive.\n\nMichael&apos;s work has been recognized with a Red Dot Design Award and two Webby Awards. He&apos;s also a frequent contributor to design publications and has spoken at Design+Research, UX Week, and SXSW. Outside of work, Michael is an avid photographer specializing in street photography and urban landscapes. He also teaches design workshops for underrepresented communities and mentors emerging designers through ADPList.`,
    experience: '10+ years in product design, 5 years leading design teams',
    education:
      'M.S. Human-Computer Interaction, Carnegie Mellon; B.A. Industrial Design, RISD',
    achievements: 'Red Dot Design Award, 2x Webby Awards, 50+ design patents',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Data Science Director',
    description:
      'Emily leads our data analytics and machine learning initiatives. With a PhD in Statistics and 10 years of industry experience, she transforms raw data into actionable business insights.',
    imageUrl: '/emily-rodriguez.jpg',
    bio: `Dr. Emily Rodriguez is a distinguished data scientist and researcher with a Ph.D. in Statistics from UC Berkeley and over 12 years of experience transforming raw data into actionable business insights. Her expertise spans machine learning, statistical modeling, and predictive analytics across various industries including fintech, healthcare, and e-commerce.\n\nEmily&apos;s academic background is complemented by her practical industry experience. She began her career as a quantitative analyst at Goldman Sachs, where she developed algorithmic trading models that generated millions in revenue. She later moved to Netflix as a Senior Data Scientist, where she was instrumental in building the recommendation algorithms that now serve over 230 million subscribers worldwide.\n\nHer technical expertise includes advanced statistical methods, deep learning, natural language processing, and computer vision. Emily is proficient in Python, R, SQL, Scala, and TensorFlow, and has extensive experience with big data technologies like Spark, Hadoop, and cloud platforms including AWS, GCP, and Azure.\n\nAt Cogniscient, Emily leads a team of data scientists and ML engineers who develop cutting-edge AI solutions for clients. She&apos;s particularly focused on responsible AI development, ensuring that machine learning models are not only accurate but also fair, interpretable, and robust. Her recent work includes developing fraud detection systems, customer churn prediction models, and natural language understanding systems.\n\nEmily is a published researcher with over 20 papers in top-tier journals and conferences including NIPS, ICML, and KDD. She holds 5 patents in machine learning applications and has been invited to speak at major data science conferences including Strata Data Conference, PyData, and the International Conference on Machine Learning.\n\nBeyond her professional achievements, Emily is passionate about diversity in STEM and serves as a board member for Girls Who Code. She also volunteers as a data science mentor and has taught graduate-level courses at UC Berkeley as an adjunct professor. In her free time, Emily enjoys hiking, cooking, and playing classical piano.`,
    experience: '12+ years in data science, 6 years in leadership roles',
    education:
      'Ph.D. Statistics, UC Berkeley; M.S. Applied Mathematics, Stanford; B.S. Mathematics, Caltech',
    achievements:
      '20+ published papers, 5 patents, keynote speaker at 15+ conferences',
  },
]
