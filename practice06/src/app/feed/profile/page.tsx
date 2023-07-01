import AsideNav from '../layout/components/Aside'
import ProfileData from './components/ProfileData'
import { Ratings } from './components/Ratings'

export default function ProfilePage() {
  return (
    <main className="grow bg-Gray-800 py-5 text-Gray-100 flex">
      <AsideNav />
      <Ratings />
      <ProfileData />
    </main>
  )
}
