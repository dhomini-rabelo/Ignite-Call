import { IBookModelPopup } from '@/layout/components/(Books)/BookDetailPopup'
import { atom } from 'jotai'

export const activeBookInPopupAtom = atom<IBookModelPopup | null>(null)
