'use client'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'
import { Books } from './components/Books'
import { Search } from './components/Search'
import { Suspense, useState } from 'react'

export default function BooksPage() {
  const [bookPopupIsOpen, setBookPopupIsOpen] = useState(true)

  function closePopup() {
    setBookPopupIsOpen(false)
  }

  return (
    <>
      <main className="pt-14 grow max-w-[996px] ml-24">
        <Search />
        <Suspense>
          <Books />
        </Suspense>
      </main>
      {bookPopupIsOpen && <BookDetailPopup handleClose={closePopup} />}
    </>
  )
}
