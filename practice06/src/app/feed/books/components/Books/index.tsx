import { SimpleBook } from '@/layout/components/(Books)/SimpleBook'
import { Button } from './styles'
import { cache } from 'react'
import { IBooksData } from './types'

export const getBooksData = cache(async () => {
  const res = await fetch('/api/data')
  if (!res.ok) {
    return { data: [] }
  }
  const responseData = await res.json()
  return responseData.data
})

export async function Books() {
  const data = (await getBooksData()) as IBooksData
  console.log({ data })

  return (
    <>
      <nav className="mt-10 mb-12 flex gap-x-3">
        <Button.category
          active={true}
          className="rounded-full py-1 px-4 leading-5"
        >
          Tudo
        </Button.category>
        {data.categories.map((category) => (
          <Button.category
            key={category.id}
            active={false}
            className="rounded-full py-1 px-4 leading-5"
          >
            {category.name}
          </Button.category>
        ))}
      </nav>
      <main className="grid grid-cols-3 gap-5 pb-5">
        {data.books.map((book) => (
          <SimpleBook width={108} height={152} book={book} key={book.id} />
        ))}
      </main>
    </>
  )
}
