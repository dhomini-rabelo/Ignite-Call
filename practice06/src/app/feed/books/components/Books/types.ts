import { IBookModel, ICategoryModel } from '@/code/db/books'

export interface IBooksData {
  books: IBookModel[]
  categories: ICategoryModel[]
}
