import NavBar from '../../../components/Navbar'
import ArticleDetail from '../../../components/ArticleDetail'

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const resolvedParams = await params
  const articleId = resolvedParams.id

  return (
    <div>
      <NavBar />
      <ArticleDetail articleId={articleId} />
    </div>
  )
}

export default ArticlePage
