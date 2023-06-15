import { CaretRight, Star } from '@phosphor-icons/react'
import BookImage from '@/layout/assets/images/book.svg'
import Image from 'next/image'

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
        <div className="py-4 px-5 flex gap-x-5 rounded-lg bg-Gray-700 min-w-[324px]">
          <Image src={BookImage} width={64} height={94} alt="Capa do livro" />
          <div className="grow flex flex-col justify-between">
            <div className="flex flex-col">
              <strong className="leading-snug text-Gray-100">O Hobbit</strong>
              <span className="text-Gray-400 leading-relaxed font-normal text-sm">
                J.R.R. Tolkien
              </span>
            </div>
            <div className="flex text-Purple-100 gap-x-1">
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} />
            </div>
          </div>
        </div>
      </main>
    </aside>
  )
}
