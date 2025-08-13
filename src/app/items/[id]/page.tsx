import Image from 'next/image';
import Link from 'next/link';
import { items } from '../data';

export async function generateStaticParams() {
  return items.map((item) => ({
    id: item.id.toString(),
  }));
}

interface ItemDetailPageProps {
  params: Promise<{ id: string }>
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const item = items.find((p) => p.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h1>
            <p className="text-gray-700 leading-relaxed">
              {item.longDescription}
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/items"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
          >
            <svg 
              className="mr-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
