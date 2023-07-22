import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { ProfilePageClientWrapper } from './clientWrapper'
import { getServerSession } from 'next-auth'
import { getUserRatingsData } from '@/layout/client/ratings'

interface Props {
  searchParams: {
    user?: string
  }
}

export default async function ProfilePage(props: Props) {
  async function getData(email: string | undefined) {
    if (email) {
      return await getUserRatingsData(email)
    } else {
      const session = await getServerSession(authOptions)
      return await getUserRatingsData(session?.user?.email || '')
    }
  }

  const data = await getData(props.searchParams.user)

  return <ProfilePageClientWrapper data={data} />
}
