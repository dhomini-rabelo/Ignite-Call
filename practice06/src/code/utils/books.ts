import { IBookModel } from '../db/books'

export function bookHasCategory(book: IBookModel, categoryId: string) {
  return book.categories
    .map((category) => category.categoryId)
    .includes(categoryId)
}
