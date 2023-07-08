import { getBooksData } from '@/layout/client/booksData'
import { IBooksData } from '../books/components/Books/types'
import Feed from './components/Feed'
import PopularBooks from './components/PopularBooks'

export async function FeedPageWrapper() {
  const data = (await getBooksData()) as IBooksData
  console.log({ data })
  return (
    <>
      <Feed />
      <PopularBooks />
    </>
  )
}
