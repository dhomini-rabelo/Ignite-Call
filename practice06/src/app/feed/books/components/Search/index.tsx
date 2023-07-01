import { SearchInput } from '@/layout/components/(Inputs)/SearchInput'
import { Binoculars } from '@phosphor-icons/react'

export function Search() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="leading-snug flex items-center gap-x-3">
        <Binoculars size={32} className="text-Green-100" />
        <strong className="text-Gray-100 text-2xl leading-snug">
          Explorar
        </strong>
      </h1>
      <div className="w-[433px]">
        <SearchInput placeholder="Buscar livro ou autor" />
      </div>
    </header>
  )
}
