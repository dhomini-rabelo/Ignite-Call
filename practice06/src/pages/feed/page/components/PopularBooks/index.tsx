import { SimpleBook } from '@/layout/components/(Books)/SimpleBook'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'

export default function PopularBooks() {
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
      <main className="mt-4">
        <SimpleBook width={64} height={94} />
      </main>
    </aside>
  )
}
