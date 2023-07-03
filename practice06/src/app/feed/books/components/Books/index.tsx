'use client'

import { SimpleBook } from '@/layout/components/(Books)/SimpleBook'
import { Button } from './styles'
import { useState } from 'react'
import { IBooksData } from './types'
import { IBookModel } from '@/code/db/books'
import { useAtom } from 'jotai'
import { activeBookInPopupAtom } from '@/layout/components/(Books)/BookDetailPopup'
import { searchTextAtom } from '@/layout/components/(Inputs)/SearchInput'

export function Books({ data }: { data: IBooksData }) {
  const [searchText] = useAtom(searchTextAtom)
  const [activeCategoryId, setActiveCategoryId] = useState<null | string>(null)
  const [, setActiveBookInPopup] = useAtom(activeBookInPopupAtom)

  function bookHasCategory(book: IBookModel, categoryId: string) {
    return book.categories
      .map((category) => category.categoryId)
      .includes(categoryId)
  }

  function filterBooksFromSearch(book: IBookModel) {
    return book.name.toLowerCase().includes(searchText)
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
      <main className="grid grid-cols-3 gap-5 pb-5 popup-overflow">
        {(activeCategoryId
          ? data.books
            .filter(filterBooksFromSearch)
            .filter((book) => bookHasCategory(book, activeCategoryId))
          : data.books.filter(filterBooksFromSearch)
        ).map((book) => (
          <div
            onClick={() =>
              setActiveBookInPopup({
                ...book,
                categoriesData: data.categories.filter((category) =>
                  bookHasCategory(book, category.id),
                ),
              })
            }
            key={book.id}
          >
            <SimpleBook width={108} height={152} book={book} />
          </div>
        ))}
      </main>
    </>
  )
}
