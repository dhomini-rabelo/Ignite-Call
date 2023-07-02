import { SimpleBook } from '@/layout/components/(Books)/SimpleBook'
import { Button } from './styles'
import { cache } from 'react'

export const getBooksData = cache(async () => {
  const res = await fetch('/api/data')
  if (!res.ok) {
    return { data: [] }
  }
  const responseData = await res.json()
  return responseData.data
})

export async function Books() {
  const data = await getBooksData()
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
        <Button.category
          active={false}
          className="rounded-full py-1 px-4 leading-5"
        >
          Computação
        </Button.category>
        <Button.category
          active={false}
          className="rounded-full py-1 px-4 leading-5"
        >
          Educação
        </Button.category>
        <Button.category
          active={false}
          className="rounded-full py-1 px-4 leading-5"
        >
          Fantasia
        </Button.category>
        <Button.category
          active={false}
          className="rounded-full py-1 px-4 leading-5"
        >
          Ficção científica
        </Button.category>
      </nav>
      <main className="grid grid-cols-3 gap-x-5">
        <SimpleBook width={108} height={152} />
        <SimpleBook width={108} height={152} />
        <SimpleBook width={108} height={152} />
      </main>
    </>
  )
}
