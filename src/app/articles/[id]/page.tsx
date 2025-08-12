'use client';

import NavBar from '../../../components/Navbar';

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const articleId = params.id;

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus auctor mattis. Vestibulum eu lectus a diam eleifend laoreet.`;

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Article {articleId}</h1>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-4">{loremIpsum}</p>
          <p>{loremIpsum}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
