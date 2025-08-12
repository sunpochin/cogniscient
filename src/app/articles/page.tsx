'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/Navbar'; // Import NavBar component

const articles = [
  {
    id: 1,
    title: 'Understanding AI in UX',
    image: 'https://picsum.photos/seed/1/250/150', // Random image for article 1
    link: '/articles/1',
  },
  {
    id: 2,
    title: 'The Future of Human-AI Interaction',
    image: 'https://picsum.photos/seed/2/250/150', // Random image for article 2
    link: '/articles/2',
  },
  {
    id: 3,
    title: 'Designing Trustworthy AI Systems',
    image: 'https://picsum.photos/seed/3/250/150', // Random image for article 3
    link: '/articles/3',
  },
  {
    id: 4,
    title: 'Cognitive Science in Product Design',
    image: 'https://picsum.photos/seed/4/250/150', // Random image for article 4
    link: '/articles/4',
  },
];

export default function ArticlesPage() {
  return (
    <div> {/* Added a wrapper div for NavBar and content */}
      <NavBar />
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
    </div>
  );
}
