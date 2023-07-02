import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <section className="border text-[#49489c] border-[#49489c] focus-within:border-Green-200 focus-within:text-Green-200 rounded-[4px] px-5 py-[0.875rem] flex items-center justify-between">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-Gray-200 placeholder:text-Gray-400 text-sm leading-6 block w-full"
      />
      <MagnifyingGlass size={20} />
    </section>
  )
}
