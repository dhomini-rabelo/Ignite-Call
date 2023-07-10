'use client'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'
import { Search } from './components/Search'
import { Suspense } from 'react'
import { BooksWrapper } from './components/Books/wrapper'
import { SessionProvider } from 'next-auth/react'

export default function BooksPage() {
  return (
    <SessionProvider>
      <main className="pt-14 grow max-w-[996px] ml-24 popup-overflow">
        <Search />
        <Suspense>
          <BooksWrapper />
        </Suspense>
      </main>
      <BookDetailPopup />
    </SessionProvider>
  )
}
