import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { SimpleBook } from '../SimpleBook'
import { Div } from './styles'
import { SimpleRating } from '../../(Rating)/SimpleRating'
import { AuthModal } from './subcomponents/AuthModal'

export function BookDetailPopup() {
  const handleClose = () => 5
  return (
    <Div.container
      className="absolute overflow-auto"
      style={{ overflow: 'auto' }}
    >
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
              <AuthModal>
                <strong className="leading-6">Avaliar</strong>
              </AuthModal>
            </strong>
          </header>
          <main
            className="mt-4 flex flex-col gap-y-3"
            style={{ gap: '0.75rem 0' }}
          >
            <SimpleRating currentUser />
            <SimpleRating />
            <SimpleRating />
          </main>
        </section>
      </Div.popup>
    </Div.container>
  )
}
