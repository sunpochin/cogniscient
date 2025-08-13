import Image from 'next/image'

interface ArticleDetailProps {
  articleId: string
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleId }) => {
  const articleData: Record<string, { title: string; content: string }> = {
    '1': {
      title: 'Modern Technology Trends',
      content: `Technology continues to evolve at an unprecedented pace, reshaping industries and transforming how we live and work. Artificial intelligence and machine learning have moved from science fiction to everyday reality, powering everything from recommendation algorithms to autonomous vehicles.

The rise of quantum computing promises to solve complex problems that were previously impossible to tackle. Meanwhile, edge computing is bringing processing power closer to where data is generated, reducing latency and improving performance for real-time applications.

Blockchain technology is finding new applications beyond cryptocurrency, from supply chain transparency to digital identity verification. The Internet of Things (IoT) continues to expand, connecting billions of devices and creating smart ecosystems in our homes, cities, and workplaces.

As we look toward the future, the convergence of these technologies will create even more powerful solutions. The key is to harness these innovations responsibly, ensuring they benefit society while addressing concerns about privacy, security, and ethical implications.

The digital transformation journey is far from over. Organizations that embrace these emerging technologies and adapt their strategies accordingly will be best positioned to thrive in an increasingly connected and automated world.`,
    },
    '2': {
      title: 'Importance of Sustainability',
      content: `Sustainability has become more than just a buzzword—it's a critical imperative for our planet's future. Climate change, resource depletion, and environmental degradation pose unprecedented challenges that require immediate and sustained action from individuals, businesses, and governments alike.

The transition to renewable energy sources is accelerating globally. Solar and wind power technologies have become increasingly cost-effective, making clean energy accessible to more communities worldwide. Energy storage solutions are also advancing rapidly, addressing the intermittency challenges of renewable sources.

Circular economy principles are gaining traction across industries. Companies are rethinking their production processes, focusing on reducing waste, reusing materials, and designing products for longevity. This shift not only benefits the environment but often leads to cost savings and innovation opportunities.

Consumer awareness and demand for sustainable products continue to grow. This market pressure is driving companies to adopt more environmentally friendly practices and transparent reporting on their sustainability efforts. Green finance and ESG investing are channeling capital toward sustainable initiatives.

The path to sustainability requires collaboration across all sectors. By combining technological innovation with policy support and individual action, we can create a more sustainable future for generations to come.`,
    },
    '3': {
      title: 'Digital Transformation',
      content: `Digital transformation has accelerated dramatically in recent years, fundamentally changing how businesses operate and compete. The COVID-19 pandemic served as a catalyst, forcing organizations to rapidly adopt digital technologies and rethink their traditional business models.

Cloud computing has become the backbone of modern digital infrastructure. It offers scalability, flexibility, and cost-effectiveness that enable businesses to innovate faster and respond to market changes more quickly. Multi-cloud and hybrid cloud strategies are helping organizations optimize their technology stack.

Remote work and digital collaboration tools have redefined the workplace. Video conferencing, project management platforms, and virtual collaboration spaces have made distributed teams more productive than ever before. This shift has also opened up new talent pools and reduced geographical constraints.

Data analytics and artificial intelligence are driving more informed decision-making. Organizations are leveraging big data to gain insights into customer behavior, optimize operations, and predict market trends. Automation is streamlining repetitive tasks and freeing up human resources for more strategic work.

The digital transformation journey is ongoing and requires continuous adaptation. Companies that successfully navigate this transformation will build more resilient, agile, and customer-centric organizations prepared for the future of business.`,
    },
    '4': {
      title: 'Healthy Living Tips',
      content: `Maintaining good health in today's fast-paced world requires intentional effort and smart choices. A holistic approach to wellness encompasses physical fitness, mental health, nutrition, and lifestyle habits that support overall well-being.

Regular physical activity is fundamental to good health. Whether it's a daily walk, strength training, or yoga practice, finding movement you enjoy makes it easier to maintain consistency. Exercise not only strengthens the body but also releases endorphins that boost mood and reduce stress.

Nutrition plays a crucial role in how we feel and function. Focus on whole foods, plenty of fruits and vegetables, lean proteins, and healthy fats. Meal planning and preparation can help you make better food choices even when life gets busy. Staying hydrated is equally important for optimal body function.

Mental health deserves the same attention as physical health. Stress management techniques like meditation, deep breathing, or journaling can help you cope with daily pressures. Building strong social connections and maintaining work-life balance are essential for emotional well-being.

Quality sleep is often overlooked but critical for health. Establishing a consistent sleep schedule, creating a relaxing bedtime routine, and optimizing your sleep environment can significantly improve your rest quality and overall health.

Small, consistent changes often lead to the most sustainable results. Focus on progress, not perfection, and celebrate the positive steps you take toward a healthier lifestyle.`,
    },
  }

  const article = articleData[articleId] || articleData['1']
  const imageUrl = `https://picsum.photos/seed/tech${articleId}/800/400`

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {article.title}
        </h1>

        <div className="flex justify-center mb-8">
          <Image
            src={imageUrl}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
