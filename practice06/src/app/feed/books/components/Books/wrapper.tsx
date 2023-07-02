import { cache } from 'react'
import { IBooksData } from './types'
import { Books } from '.'

export const getBooksData = cache(async () => {
  const res = await fetch('/api/data')
  if (!res.ok) {
    return { data: [] }
  }
  const responseData = await res.json()
  return responseData.data
})

export async function BooksWrapper() {
  const data = (await getBooksData()) as IBooksData

  return <Books data={data || { categories: [], books: [] }} />
}
