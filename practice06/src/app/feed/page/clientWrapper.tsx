'use client'

import { IBooksData } from '../../../layout/client/types'
import Feed from './components/Feed'
import PopularBooks from './components/PopularBooks'
import { BookDetailPopup } from '@/layout/components/(Books)/BookDetailPopup'

export async function FeedPageClientWrapper({ data }: { data: IBooksData }) {
  return (
    <>
      <Feed booksData={data} />
      <PopularBooks booksData={data} />
      <BookDetailPopup />
    </>
  )
}
