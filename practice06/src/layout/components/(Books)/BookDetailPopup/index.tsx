import { BookOpen, BookmarkSimple, Star, X } from '@phosphor-icons/react'
import UserIcon from '@/layout/assets/images/user.svg'
import Image from 'next/image'
import { SimpleBook } from '../SimpleBook'
import { Div } from './styles'

export function BookDetailPopup() {
  const handleClose = () => 5
  return (
    <Div.container className="absolute">
      <Div.popup className="absolute px-12 pt-6 pb-12 flex flex-col">
        <div className="flex x-content w-full font-bold">
          <X
            onClick={handleClose}
            size={24}
            className="text-Gray-300 cursor-pointer hover:text-Gray-200"
          />
        </div>
        <section className="book flex flex-col mt-4 bg-Gray-700">
          <SimpleBook width={171} height={242} showRatings />
          <div className="mt-10 py-6 grid book-data w-full">
            <section className="flex gap-x-4 items-center">
              <BookmarkSimple size={24} className="text-Green-100" />
              <div className="flex flex-col">
                <label className="leading-6 text-Gray-300 text-sm">
                  Categoria
                </label>
                <strong className="leading-5 text-Gray-200">
                  Computação, educação
                </strong>
              </div>
            </section>
            <section className="flex gap-x-4 items-center">
              <BookOpen size={24} className="text-Green-100" />
              <div className="flex flex-col">
                <label className="leading-6 text-Gray-300 text-sm">
                  Páginas
                </label>
                <strong className="leading-5 text-Gray-200">160</strong>
              </div>
            </section>
          </div>
        </section>
        <section className="text-Gray-100 mt-10">
          <header className="flex justify-between items-center">
            <span className="text-sm leading-6 text-Gray-200">Avaliações</span>
            <strong className="flex text-Purple-100 items-center cursor-pointer">
              <strong className="leading-6">Avaliar</strong>
            </strong>
          </header>
          <main className="mt-4 flex flex-col gap-y-3">
            <section className="p-6 max-w-[608px] rounded-lg bg-Gray-700">
              <header
                className="flex justify-between gap-x-4"
                style={{ marginBottom: '1.25rem' }}
              >
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
              <p className="text-Gray-300 leading-6 font-normal text-justify block">
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                velit ipsum. Sed vulputate massa velit nibh...
              </p>
            </section>
          </main>
        </section>
      </Div.popup>
    </Div.container>
  )
}
