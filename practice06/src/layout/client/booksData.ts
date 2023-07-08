import { cache } from 'react'

export const getBooksData = cache(async () => {
  const res = await fetch('http://localhost:3000/api/data')
  if (!res.ok) {
    return { categories: [], books: [], users: [] }
  }
  const responseData = await res.json()
  return responseData.data
})
