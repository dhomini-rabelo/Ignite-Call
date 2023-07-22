'use client'

import { SearchInput } from '@/layout/components/(Inputs)/SearchInput'
import { User } from '@phosphor-icons/react'
import { UserRating } from './subcomponents/UserRating'

export function Ratings() {
  return (
    <main className="pt-14 ml-24 mr-16 grow max-w-[624px]">
      <h1 className="leading-snug flex items-center gap-x-3">
        <User size={32} className="text-Green-100" />
        <strong className="text-Gray-100 text-2xl leading-snug">Perfil</strong>
      </h1>
      <div className="mt-10 mb-8">
        <SearchInput placeholder="Buscar livro avaliado" />
      </div>
      <section>
        <span className="block text-Gray-300 leading-6 text-sm mb-2">
          Há 2 dias
        </span>
        <UserRating />
      </section>
    </main>
  )
}
