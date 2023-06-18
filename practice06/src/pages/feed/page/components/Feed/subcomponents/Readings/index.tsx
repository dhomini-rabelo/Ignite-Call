import { CaretRight, Star } from '@phosphor-icons/react'
import BookImage from '@/layout/assets/images/book.svg'
import Image from 'next/image'

export function Readings() {
  return (
    <section className="mt-10">
      <header className="flex justify-between items-center">
        <h2 className="leading-relaxed font-normal text-sm">
          Sua última leitura
        </h2>
        <strong className="flex text-Purple-100 items-center">
          <strong className="text-sm leading-6">Ver todas</strong>
          <CaretRight size={16} />
        </strong>
      </header>
      <div className="mt-4">
        <div className="p-6 max-w-[608px] rounded-lg bg-Gray-600">
          <main className="flex gap-x-5 items-stretch">
            <Image
              src={BookImage}
              width={108}
              height={152}
              alt="Foto de perfil de usuário"
            />
            <div className="grow flex flex-col">
              <div className="flex justify-between gap-x-4">
                <div className="grow">
                  <span className="text-Gray-300 leading-relaxed font-normal text-sm block">
                    Há 2 dias
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
              <div className="flex flex-col pt-3 pb-6">
                <strong className="leading-snug text-Gray-100">O Hobbit</strong>
                <span className="text-Gray-400 leading-relaxed font-normal text-sm">
                  J.R.R. Tolkien
                </span>
              </div>
              <p className="text-Gray-300 leading-6 font-normal text-justify">
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                velit ipsum. Sed vulputate massa velit nibh...
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
