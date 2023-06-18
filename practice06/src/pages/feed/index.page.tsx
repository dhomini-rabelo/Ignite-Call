import AsideNav from './layout/components/Aside'
import Feed from './page/components/Feed'
import PopularBooks from './page/components/PopularBooks'

export default function FeedPage() {
  return (
    <main className="grow bg-Gray-800 py-5 text-Gray-100 flex">
      <AsideNav />
      <Feed />
      <PopularBooks />
    </main>
  )
}
