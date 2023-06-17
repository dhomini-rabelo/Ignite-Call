import AsideNav from '../layout/components/Aside'
import { Search } from './components/Search'

export default function BooksPage() {
  return (
    <main className="grow bg-Gray-800 py-5 text-Gray-100 flex">
      <AsideNav />
      <main className="pt-14 px-24 grow">
        <Search />
      </main>
    </main>
  )
}
