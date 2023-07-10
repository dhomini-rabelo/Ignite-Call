'use client'

import { SessionProvider } from 'next-auth/react'
import { IBooksData } from '../../../layout/client/types'
import Feed from './components/Feed'
import PopularBooks from './components/PopularBooks'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'

export function FeedPageClientWrapper({ data }: { data: IBooksData }) {
  return (
    <SessionProvider>
      <main className="flex grow popup-overflow">
        <Feed booksData={data} />
        <PopularBooks booksData={data} />
      </main>
      <BookDetailPopup />
    </SessionProvider>
  )
}
