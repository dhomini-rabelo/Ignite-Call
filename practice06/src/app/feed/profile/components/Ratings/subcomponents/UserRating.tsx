import { IRatingData } from '@/layout/client/ratings'
import { RatingStars } from '@/layout/components/(Rating)/RatingStars'
import Image from 'next/image'

export function UserRating({ rating }: { rating: IRatingData }) {
  return (
    <section className="p-6 rounded-lg bg-Gray-700">
      <main className="flex gap-x-5 items-stretch">
        <Image
          src={rating.book.cover_url.replace('jpg', 'png').slice(6)}
          width={108}
          height={152}
          alt="Foto da capa do livro"
        />
        <div className="grow flex flex-col">
          <div className="flex justify-between gap-x-4">
            <div className="flex flex-col pb-6 grow">
              <strong className="leading-snug text-Gray-100">
                {rating.book.name}
              </strong>
              <span className="text-Gray-400 leading-relaxed font-normal text-sm">
                {rating.book.author}
              </span>
            </div>
            <RatingStars rate={rating.rate} />
          </div>

          <p className="text-Gray-300 leading-6 font-normal text-justify">
            {rating.description}
          </p>
        </div>
      </main>
    </section>
  )
}
