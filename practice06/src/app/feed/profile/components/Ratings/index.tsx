'use client'

import { SearchInput } from '@/layout/components/(Inputs)/SearchInput'
import { User } from '@phosphor-icons/react'
import { UserRating } from './subcomponents/UserRating'
import { IUserRatingsData } from '@/layout/client/ratings'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Ratings({ data }: { data: IUserRatingsData }) {
  return (
    <main className="pt-14 ml-24 mr-16 grow max-w-[624px]">
      <h1 className="leading-snug flex items-center gap-x-3">
        <User size={32} className="text-Green-100" />
        <strong className="text-Gray-100 text-2xl leading-snug">Perfil</strong>
      </h1>
      <div className="mt-10 mb-8">
        <SearchInput placeholder="Buscar livro avaliado" />
      </div>
      <section className="flex flex-col gap-y-6 pb-12">
        {data.ratings
          .slice()
          .sort(
            (rating, otherRating) =>
              new Date(otherRating.created_at).getTime() -
              new Date(rating.created_at).getTime(),
          )
          .map((rating) => (
            <section key={rating.id}>
              <span className="block text-Gray-300 leading-6 text-sm mb-2">
                {formatDistanceToNow(new Date(rating.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>
              <UserRating rating={rating} />
            </section>
          ))}
      </section>
    </main>
  )
}
