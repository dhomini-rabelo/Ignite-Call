import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'
import AsideNav from '../layout/components/Aside'
import { Books } from './components/Books'
import { Search } from './components/Search'

export default function BooksPage() {
  return (
    <>
      <main className="grow bg-Gray-800 py-5 text-Gray-100 flex">
        <AsideNav />
        <main className="pt-14 px-24 grow">
          <Search />
          <Books />
        </main>
      </main>
      <BookDetailPopup />
    </>
  )
}
