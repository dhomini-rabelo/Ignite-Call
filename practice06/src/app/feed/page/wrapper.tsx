import { getBooksData } from '@/layout/client/booksData'
import { IBooksData } from '../../../layout/client/types'
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
