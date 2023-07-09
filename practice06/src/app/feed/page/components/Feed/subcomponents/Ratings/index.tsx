import { IBooksData } from '@/layout/client/types'
import { RatingWithBook } from '@/layout/components/(Rating)/RatingWithBook'
import { IBookModel, IRatingModel } from '@/code/db/books'
import { activeBookInPopupAtom } from '@/layout/components/(Books)/BookDetailPopup'
import { useAtom } from 'jotai'
import { bookHasCategory } from '@/code/utils/books'

interface ratingFromBook {
  book: IBookModel
  rating: IRatingModel
}

export function Ratings({ booksData }: { booksData: IBooksData }) {
  const [, setActiveBookInPopup] = useAtom(activeBookInPopupAtom)
  const ratingsFromBooks: ratingFromBook[] = booksData.books.reduce(
    (acc: ratingFromBook[], book) => {
      const rating = book.ratings.length >= 1 ? book.ratings[0] : null
      return rating ? [...acc, { rating, book }] : [...acc]
    },
    [],
  )

  console.log({ ratingsFromBooks })

  return (
    <section className="mt-10">
      <h2 className="leading-relaxed font-normal text-sm">
        Avaliações mais recentes
      </h2>
      <div className="mt-4 flex flex-col gap-y-3 pb-8">
        {ratingsFromBooks
          .slice(0, ratingsFromBooks.length > 4 ? 4 : ratingsFromBooks.length)
          .map((ratingData) => (
            <div
              onClick={() =>
                setActiveBookInPopup({
                  ...ratingData.book,
                  categoriesData: booksData.categories.filter((category) =>
                    bookHasCategory(ratingData.book, category.id),
                  ),
                })
              }
              key={ratingData.book.id}
            >
              <RatingWithBook
                rating={ratingData.rating}
                book={ratingData.book}
                key={ratingData.rating.id}
              />
            </div>
          ))}
      </div>
    </section>
  )
}
