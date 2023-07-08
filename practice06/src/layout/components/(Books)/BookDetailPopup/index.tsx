import { BookOpen, BookmarkSimple, Check, Star, X } from '@phosphor-icons/react'
import { SimpleBook } from '../SimpleBook'
import { Div } from './styles'
import { SimpleRating } from '../../(Rating)/SimpleRating'
import { AuthModal } from './subcomponents/AuthModal'
import UserIcon from '@/layout/assets/images/user.svg'
import Image from 'next/image'
import { IBookModel, ICategoryModel } from '@/code/db/books'
import { useAtom, atom } from 'jotai'

export interface IBookModelPopup extends IBookModel {
  categoriesData: ICategoryModel[]
}

export const activeBookInPopupAtom = atom<IBookModelPopup | null>(null)

export function BookDetailPopup() {
  const [book, setActiveBookInPopup] = useAtom(activeBookInPopupAtom)
  function handleClose() {
    setActiveBookInPopup(null)
  }

  return book ? (
    <Div.container
      className="absolute overflow-auto popup-we"
      style={{ overflow: 'auto' }}
    >
      <Div.popup className="absolute px-12 pt-6 pb-12 flex flex-col">
        <div className="flex x-content w-full font-bold">
          <X
            onClick={handleClose}
            size={24}
            className="text-Gray-300 cursor-pointer hover:text-Gray-200"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <section className="book flex flex-col mt-4 bg-Gray-700">
          <SimpleBook width={171} height={242} showRatings book={book} />
          <div className="mt-10 py-6 grid book-data w-full">
            <section className="flex gap-x-4 items-center">
              <BookmarkSimple size={24} className="text-Green-100" />
              <div className="flex flex-col">
                <label className="leading-6 text-Gray-300 text-sm">
                  Categoria
                </label>
                <strong className="leading-5 text-Gray-200">
                  {book.categoriesData
                    .map((category) => category.name)
                    .join(', ')}
                </strong>
              </div>
            </section>
            <section className="flex gap-x-4 items-center">
              <BookOpen size={24} className="text-Green-100" />
              <div className="flex flex-col">
                <label className="leading-6 text-Gray-300 text-sm">
                  Páginas
                </label>
                <strong className="leading-5 text-Gray-200">
                  {book.total_pages}
                </strong>
              </div>
            </section>
          </div>
        </section>
        <section className="text-Gray-100 mt-10">
          <header className="flex justify-between items-center">
            <span className="text-sm leading-6 text-Gray-200">Avaliações</span>
            <strong className="flex text-Purple-100 items-center cursor-pointer">
              <AuthModal>
                <strong className="leading-6">Avaliar</strong>
              </AuthModal>
            </strong>
          </header>
          <main
            className="mt-4 flex flex-col gap-y-3"
            style={{ gap: '0.75rem 0' }}
          >
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
                <div
                  className="grow self-center"
                  style={{ alignSelf: 'center' }}
                >
                  <strong className="leading-relaxed block text-Gray-100">
                    Jaxson Dias
                  </strong>
                </div>
                <div className="flex text-Purple-100 gap-x-1">
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </div>
              </header>
              <textarea
                className="text-Gray-200 py-[0.875rem] px-5 bg-Gray-800 w-full rounded-[4px] border border-Green-200"
                style={{ borderColor: 'var(--Green-200)' }}
                rows={5}
              ></textarea>
              <div
                className="flex justify-end mt-3 gap-x-2"
                style={{ justifyContent: 'flex-end', marginTop: '0.75rem' }}
              >
                <button
                  className="bg-Gray-600 p-2 text-Purple-100 hover:bg-Gray-500 rounded"
                  style={{ padding: '0.5rem' }}
                >
                  <X size={24} />
                </button>
                <button
                  className="bg-Gray-600 p-2 text-Green-100 hover:bg-Gray-500 rounded"
                  style={{ padding: '0.5rem' }}
                >
                  <Check size={24} />
                </button>
              </div>
            </section>
            {book.ratings.map((rating) => (
              <SimpleRating key={rating.id} rating={rating} />
            ))}
          </main>
        </section>
      </Div.popup>
    </Div.container>
  ) : (
    <></>
  )
}
