import { MagnifyingGlass } from '@phosphor-icons/react'
import { atom, useAtom } from 'jotai'

export const searchTextAtom = atom<string>('')

export function SearchInput({ placeholder }: { placeholder: string }) {
  const [searchText, setSearchText] = useAtom(searchTextAtom)
  return (
    <section className="border text-[#49489c] border-[#49489c] focus-within:border-Green-200 focus-within:text-Green-200 rounded-[4px] px-5 py-[0.875rem] flex items-center justify-between">
      <input
        type="text"
        value={searchText}
        placeholder={placeholder}
        className="bg-transparent text-Gray-200 placeholder:text-Gray-400 text-sm leading-6 block w-full"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <MagnifyingGlass size={20} />
    </section>
  )
}
