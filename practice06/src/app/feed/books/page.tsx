'use client'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'
import { Search } from './components/Search'
import { Suspense, useState } from 'react'
import { BooksWrapper } from './components/Books/wrapper'

export default function BooksPage() {
  const [bookPopupIsOpen, setBookPopupIsOpen] = useState(false)

  function closePopup() {
    setBookPopupIsOpen(false)
  }

  return (
    <>
      <main className="pt-14 grow max-w-[996px] ml-24">
        <Search />
        <Suspense>
          <BooksWrapper />
        </Suspense>
      </main>
      {bookPopupIsOpen && <BookDetailPopup handleClose={closePopup} />}
    </>
  )
}
