export const getBooksData = async () => {
  const res = await fetch('http://localhost:3000/api/data', {
    next: { revalidate: 60 * 60 * 4 },
  })
  if (!res.ok) {
    return { categories: [], books: [], users: [] }
  }
  const responseData = await res.json()
  return responseData.data
}
