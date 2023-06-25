import AsideNav from '../layout/components/Aside'
import PopularBooks from '../page/components/PopularBooks'
import { Ratings } from './components/Ratings'

export default function ProfilePage() {
  return (
    <main className="grow bg-Gray-800 py-5 text-Gray-100 flex">
      <AsideNav />
      <Ratings />
      <PopularBooks />
    </main>
  )
}
