import BookImage from '@/layout/assets/images/book.svg'
import { Star } from '@phosphor-icons/react'
import Image from 'next/image'

export function SimpleBook({
  width,
  height,
  showRatings = false,
}: {
  width: number
  height: number
  showRatings?: boolean
}) {
  return (
    <section className="py-4 px-5 flex gap-x-5 rounded-lg bg-Gray-700 min-w-[324px]">
      <Image
        src={BookImage}
        width={width}
        height={height}
        alt="Capa do livro"
      />
      <div className="grow flex flex-col justify-between">
        <div className="flex flex-col">
          <strong className="leading-snug text-Gray-100">O Hobbit</strong>
          <span className="text-Gray-400 leading-relaxed font-normal text-sm">
            J.R.R. Tolkien
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
