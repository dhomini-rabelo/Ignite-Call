import { IBookModel } from '@/code/db/books'
import BookImage from '@/layout/assets/images/book.svg'
import { Book, Star } from '@phosphor-icons/react'
import Image from 'next/image'

export function SimpleBook({
  width,
  height,
  showRatings = false,
  className = '',
  book = {
    id: '1419e76a-7f03-4c2b-bd0a-fba25c019e22',
    name: 'Código Limpo',
    author: 'Robert C. Martin',
    summary: '',
    cover_url: 'codigo-limpo.png',
    total_pages: 425,
    created_at: '2023-07-01T21:09: 25.393Z',
  },
}: {
  width: number
  height: number
  showRatings?: boolean
  className?: string
  book?: IBookModel
}) {
  return (
    <section
      className={`py-4  ${!showRatings &&
        'px-5 cursor-pointer border-2 hover:border-Gray-600 border-transparent'
        } flex gap-x-5 rounded-lg bg-Gray-700 min-w-[324px] ${className}`}
    >
      <Image
        src={`/books/${book.cover_url}`}
        width={width}
        height={height}
        alt="Capa do livro"
      />
      <div className="grow flex flex-col justify-between">
        <div className="flex flex-col">
          <strong className="leading-snug text-Gray-100">{book.name}</strong>
          <span className="text-Gray-400 leading-relaxed font-normal text-sm">
            {book.author}
          </span>
        </div>
        <div className="flex flex-col gap-y-1" style={{ rowGap: '4px' }}>
          <div className="flex text-Purple-100 gap-x-1">
            <Star size={16} weight="fill" />
            <Star size={16} weight="fill" />
            <Star size={16} weight="fill" />
            <Star size={16} weight="fill" />
            <Star size={16} />
          </div>
          {showRatings && (
            <span className="text-sm text-Gray-400 leading-5">
              3 Avaliações
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
