'use client'

import { IBooksData } from '@/layout/client/types'
import { SimpleBook } from '@/layout/components/(Books)/SimpleBook'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'

export default function PopularBooks({ booksData }: { booksData: IBooksData }) {
  return (
    <aside className="pt-32 grow max-w-[324px]">
      <header className="flex justify-between items-center">
        <span className="text-sm leading-6">Livros populares</span>
        <strong className="flex text-Purple-100 items-center">
          <Link href="/feed/books" className="font-bold text-sm leading-6">
            Ver todos
          </Link>
          <CaretRight size={16} />
        </strong>
      </header>
      <main className="mt-4 flex flex-col gap-y-3">
        {booksData.books
          .slice(0, booksData.books.length > 4 ? 4 : booksData.books.length)
          .map((book) => (
            <SimpleBook width={64} height={94} book={book} key={book.id} />
          ))}
      </main>
    </aside>
  )
}
