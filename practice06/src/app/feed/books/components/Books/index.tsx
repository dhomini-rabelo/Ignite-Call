'use client'

import { SimpleBook } from '@/layout/components/(Books)/SimpleBook'
import { Button } from './styles'
import { cache, useState } from 'react'
import { IBooksData } from './types'
import { IBookModel } from '@/code/db/books'
import { useAtom } from 'jotai'
import { activeBookInPopupAtom } from '../../code/states'

export const getBooksData = cache(async () => {
  const res = await fetch('/api/data')
  if (!res.ok) {
    return { data: [] }
  }
  const responseData = await res.json()
  return responseData.data
})

export function Books({ data }: { data: IBooksData }) {
  const [activeCategoryId, setActiveCategoryId] = useState<null | string>(null)
  const [, setActiveBookInPopup] = useAtom(activeBookInPopupAtom)

  function bookIsInActiveCategory(book: IBookModel) {
    return book.categories
      .map((category) => category.categoryId)
      .includes(activeCategoryId || '')
  }

  return (
    <>
      <nav className="mt-10 mb-12 flex gap-x-3">
        <Button.category
          active={!activeCategoryId}
          onClick={() => setActiveCategoryId(null)}
          className="rounded-full py-1 px-4 leading-5"
        >
          Tudo
        </Button.category>
        {data.categories.map((category) => (
          <Button.category
            key={category.id}
            onClick={() => setActiveCategoryId(category.id)}
            active={activeCategoryId === category.id}
            className="rounded-full py-1 px-4 leading-5"
          >
            {category.name}
          </Button.category>
        ))}
      </nav>
      <main className="grid grid-cols-3 gap-5 pb-5">
        {(activeCategoryId
          ? data.books.filter(bookIsInActiveCategory)
          : data.books
        ).map((book) => (
          <div onClick={() => setActiveBookInPopup(book)} key={book.id}>
            <SimpleBook width={108} height={152} book={book} />
          </div>
        ))}
      </main>
    </>
  )
}
