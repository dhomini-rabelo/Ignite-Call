'use client'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'
import { Search } from './components/Search'
import { Suspense } from 'react'
import { BooksWrapper } from './components/Books/wrapper'
import { useAtom } from 'jotai'
import { activeBookInPopupAtom } from './code/states'

export default function BooksPage() {
  const [activeBookInPopup, setActiveBookInPopup] = useAtom(
    activeBookInPopupAtom,
  )

  function closePopup() {
    setActiveBookInPopup(null)
  }

  return (
    <>
      <main className="pt-14 grow max-w-[996px] ml-24">
        <Search />
        <Suspense>
          <BooksWrapper />
        </Suspense>
      </main>
      {activeBookInPopup && (
        <BookDetailPopup handleClose={closePopup} book={activeBookInPopup} />
      )}
    </>
  )
}
