import { IBookModel, ICategoryModel } from '@/code/db/books'
import { IUserModel } from '@/code/db/users'

export interface IBooksData {
  books: IBookModel[]
  categories: ICategoryModel[]
  users: IUserModel[]
}
