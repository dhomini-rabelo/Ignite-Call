import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

export function Search() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="leading-snug flex items-center gap-x-3">
        <Binoculars size={32} className="text-Green-100" />
        <strong className="text-Gray-100 text-2xl leading-snug">
          Explorar
        </strong>
      </h1>
      <section className="border border-[#49489c] rounded-[4px] px-5 py-[0.875rem] grow max-w-[433px] flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar livro ou autor"
          className="bg-transparent text-Gray-400 text-sm leading-6 block w-full"
        />
        <MagnifyingGlass color="#49489c" size={20} />
      </section>
    </header>
  )
}
