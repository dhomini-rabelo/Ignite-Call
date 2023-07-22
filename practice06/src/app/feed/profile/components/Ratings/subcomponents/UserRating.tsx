import BookImage from '@/layout/assets/images/book.svg'
import { Star } from '@phosphor-icons/react'
import Image from 'next/image'

export function UserRating() {
  return (
    <section className="p-6 rounded-lg bg-Gray-700">
      <main className="flex gap-x-5 items-stretch">
        <Image
          src={BookImage}
          width={108}
          height={152}
          alt="Foto de perfil de usuário"
        />
        <div className="grow flex flex-col">
          <div className="flex justify-between gap-x-4">
            <div className="flex flex-col pb-6 grow">
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

          <p className="text-Gray-300 leading-6 font-normal text-justify">
            et aenean posuere amet ultrices. Cras fermentum id pulvinar velit
            ipsum. Sed vulputate massa velit nibh...
          </p>
        </div>
      </main>
    </section>
  )
}
