'use client'

import BooksIcon from '@/layout/assets/images/books.svg'
import AuthorIcon from '@/layout/assets/images/author.svg'
import Image from 'next/image'
import { Div } from './styles'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import { IRatingData, IUserRatingsData } from '@/layout/client/ratings'
import { Avatar } from '@/layout/components/(Users)/Avatar'

interface IUserData {
  pagesRead: number
  authorsRead: string[]
  categoriesRead: string[]
}

type IReadCategoryEntry = readonly [string, number]

export default function ProfileData({ data }: { data: IUserRatingsData }) {
  const { user, ratings } = data

  const userData: IUserData = ratings.reduce(
    (acc: IUserData, rating: IRatingData) => ({
      pagesRead: acc.pagesRead + rating.book.total_pages,
      categoriesRead: [
        ...acc.categoriesRead,
        ...rating.book.categories.map((category) => category.category.name),
      ],
      authorsRead: acc.authorsRead.includes(rating.book.author)
        ? acc.authorsRead
        : [...acc.authorsRead, rating.book.author],
    }),
    { pagesRead: 0, authorsRead: [], categoriesRead: [] },
  )

  const mostReadCategories = Object.entries(
    userData.categoriesRead.reduce((acc, category: string) => {
      const data = {
        ...acc,
      } as { [key: string]: number }
      data[category] = (data[category] || 0) + 1
      return data
    }, {}) as { [key: string]: number },
  ).sort(
    (item: IReadCategoryEntry, otherItem: IReadCategoryEntry) =>
      otherItem[1] - item[1],
  )

  return (
    <aside className="pt-32 grow flex flex-col items-center max-w-[308px]">
      <Avatar src={user.image} width={72} height={72} />
      <div className="mt-5 w-full text-center">
        <h2 className="leading-5 block text-Gray-100 font-bold text-xl">
          {user.name}
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
            <strong className="leading-5 text-Gray-200">
              {userData.pagesRead}
            </strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Páginas lidas
            </label>
          </div>
        </section>
        <section className="flex gap-x-5 items-center">
          <Image src={BooksIcon} width={24} height={24} alt="ícone de livros" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">
              {ratings.length}
            </strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Livros avaliados
            </label>
          </div>
        </section>
        <section className="flex gap-x-5 items-center">
          <Image src={AuthorIcon} width={24} height={24} alt="ícone de autor" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">
              {userData.authorsRead.length}
            </strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Autores lidos
            </label>
          </div>
        </section>
        <section className="flex gap-x-5 items-center">
          <BookmarkSimple size={24} className="text-Green-100" />
          <div className="flex flex-col">
            <strong className="leading-5 text-Gray-200">
              {mostReadCategories[0] ? mostReadCategories[0][0] : '---'}
            </strong>
            <label className="leading-6 text-Gray-300 text-sm">
              Categoria mais lida
            </label>
          </div>
        </section>
      </main>
    </aside>
  )
}
