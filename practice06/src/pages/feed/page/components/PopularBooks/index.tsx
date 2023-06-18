import { CaretRight } from '@phosphor-icons/react'
import { Book } from '@/layout/components/Book'

export default function PopularBooks() {
  return (
    <aside className="pt-36 pl-16 pr-24 grow">
      <header className="flex justify-between items-center">
        <span className="text-sm leading-6">Livros populares</span>
        <strong className="flex text-Purple-100 items-center">
          <strong className="text-sm leading-6">Ver todos</strong>
          <CaretRight size={16} />
        </strong>
      </header>
      <main className="mt-4">
        <Book width={64} height={94} />
      </main>
    </aside>
  )
}
