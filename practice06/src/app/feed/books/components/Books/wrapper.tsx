import { IBooksData } from '../../../../../layout/client/types'
import { Books } from '.'
import { getBooksData } from '@/layout/client/booksData'

export async function BooksWrapper() {
  const data = (await getBooksData()) as IBooksData

  console.log({ data })

  return <Books data={data || { categories: [], books: [], users: [] }} />
}
