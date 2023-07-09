import { getBooksData } from '@/layout/client/booksData'
import { IBooksData } from '../../../layout/client/types'
import { FeedPageClientWrapper } from './clientWrapper'

export async function FeedPageWrapper() {
  const data = (await getBooksData()) as IBooksData
  return (
    <>
      <FeedPageClientWrapper data={data} />
    </>
  )
}
