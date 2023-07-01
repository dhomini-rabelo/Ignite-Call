'use client'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'
import AsideNav from '../layout/components/Aside'
import { Books } from './components/Books'
import { Search } from './components/Search'
import { useState } from 'react'

export default function BooksPage() {
  const [bookPopupIsOpen, setBookPopupIsOpen] = useState(true)

  function closePopup() {
    setBookPopupIsOpen(false)
  }

  return (
    <>
      <main className="grow bg-Gray-800 py-5 text-Gray-100 flex gap-x-24">
        <AsideNav />
        <main className="pt-14 grow max-w-[996px]">
          <Search />
          <Books />
        </main>
      </main>
      {bookPopupIsOpen && <BookDetailPopup handleClose={closePopup} />}
    </>
  )
}
