export const getBooksData = async () => {
  const res = await fetch('http://localhost:3000/api/data', {
    cache: 'no-cache',
  })
  if (!res.ok) {
    return { categories: [], books: [], users: [] }
  }
  const responseData = await res.json()
  return responseData.data
}
