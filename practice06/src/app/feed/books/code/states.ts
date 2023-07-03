import { IBookModel } from '@/code/db/books'
import { atom } from 'jotai'

export const activeBookInPopupAtom = atom<IBookModel | null>(null)
