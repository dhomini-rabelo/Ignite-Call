import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { ProfilePageClientWrapper } from './clientWrapper'
import { getServerSession } from 'next-auth'
import { getUserRatingsData } from '@/layout/client/ratings'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  const data = await getUserRatingsData(session?.user?.email || '')
  return <ProfilePageClientWrapper data={data} />
}
