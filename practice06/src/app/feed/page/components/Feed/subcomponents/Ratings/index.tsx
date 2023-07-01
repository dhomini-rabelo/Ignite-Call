import { Star } from '@phosphor-icons/react'
import UserIcon from '@/layout/assets/images/user.svg'
import BookImage from '@/layout/assets/images/book.svg'
import Image from 'next/image'

export function Ratings() {
  return (
    <section className="mt-10">
      <h2 className="leading-relaxed font-normal text-sm">
        Avaliações mais recentes
      </h2>
      <div className="mt-4">
        <div className="p-6 max-w-[608px] rounded-lg bg-Gray-700">
          <header className="flex justify-between gap-x-4">
            <Image
              src={UserIcon}
              width={40}
              height={40}
              alt="Foto de perfil de usuário"
            />
            <div className="grow">
              <strong className="font-normal leading-relaxed block text-Gray-100">
                Jaxson Dias
              </strong>
              <span className="text-Gray-400 leading-relaxed font-normal text-sm block">
                Hoje
              </span>
            </div>
            <div className="flex text-Purple-100 gap-x-1">
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} />
            </div>
          </header>
          <main className="flex gap-x-5 mt-8 items-stretch">
            <Image
              src={BookImage}
              width={108}
              height={152}
              alt="Foto de perfil de usuário"
            />
            <div className="grow flex flex-col gap-y-5">
              <div className="flex flex-col">
                <strong className="leading-snug text-Gray-100">O Hobbit</strong>
                <span className="text-Gray-400 leading-relaxed font-normal text-sm">
                  J.R.R. Tolkien
                </span>
              </div>
              <p className="text-Gray-300 leading-6 font-normal text-justify">
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
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
