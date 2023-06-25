import UserIcon from '@/layout/assets/images/user.svg'
import BooksIcon from '@/layout/assets/images/books.svg'
import AuthorIcon from '@/layout/assets/images/author.svg'
import Image from 'next/image'
import { Div } from './styles'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'

export default function ProfileData() {
  return (
    <aside className="pt-32 pl-16 pr-24 grow flex flex-col items-center">
      <Image
        src={UserIcon}
        width={72}
        height={72}
        alt="Foto de perfil de usuário"
      />
      <div className="mt-5 w-full text-center">
        <h2 className="leading-5 block text-Gray-100 font-bold text-xl">
          Jaxson Dias
        </h2>
        <span className="text-Gray-400 leading-6 font-normal text-sm block">
          membro desde 2019
        </span>
      </div>
      <Div.line className="my-8" />
      <main className="py-5 flex flex-col gap-y-10">
        <section className="flex gap-x-5 items-center">
          <BookOpen size={24} className="text-Green-100" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">3800</strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Páginas lidas
            </label>
          </div>
        </section>
        <section className="flex gap-x-5 items-center">
          <Image src={BooksIcon} width={24} height={24} alt="ícone de livros" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">10</strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Livros avaliados
            </label>
          </div>
        </section>
        <section className="flex gap-x-5 items-center">
          <Image src={AuthorIcon} width={24} height={24} alt="ícone de autor" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">8</strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Autores lidos
            </label>
          </div>
        </section>
        <section className="flex gap-x-5 items-center">
          <BookmarkSimple size={24} className="text-Green-100" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">Computação</strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Categoria mais lida
            </label>
          </div>
        </section>
      </main>
    </aside>
  )
}
