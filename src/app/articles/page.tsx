'use client';

import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Understanding AI in UX',
    image: '/cogniscient.png', // Placeholder image
    link: '/articles/article-1',
  },
  {
    id: 2,
    title: 'The Future of Human-AI Interaction',
    image: '/cogniscient.png', // Placeholder image
    link: '/articles/article-2',
  },
  {
    id: 3,
    title: 'Designing Trustworthy AI Systems',
    image: '/cogniscient.png', // Placeholder image
    link: '/articles/article-3',
  },
  {
    id: 4,
    title: 'Cognitive Science in Product Design',
    image: '/cogniscient.png', // Placeholder image
    link: '/articles/article-4',
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg bg-gray-50">
            <Link href={article.link}>
              <Image
                src={article.image}
                alt={article.title}
                width={250}
                height={150}
                className="rounded-md mb-4 object-cover"
              />
            </Link>
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <Link href={article.link} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
