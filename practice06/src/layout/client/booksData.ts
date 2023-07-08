import { cache } from 'react'

export const getBooksData = cache(async () => {
  const res = await fetch('/api/data')
  if (!res.ok) {
    return { data: [] }
  }
  const responseData = await res.json()
  return responseData.data
})
