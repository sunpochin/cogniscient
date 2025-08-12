import NavBar from '../../../components/Navbar'
import MemberDetail from '../../../components/MemberDetail'

interface MemberPageProps {
  params: Promise<{ id: string }>
}

const MemberPage: React.FC<MemberPageProps> = async ({ params }) => {
  const resolvedParams = await params
  const memberId = resolvedParams.id

  return (
    <div>
      <NavBar />
      <MemberDetail memberId={memberId} />
    </div>
  )
}

export default MemberPage