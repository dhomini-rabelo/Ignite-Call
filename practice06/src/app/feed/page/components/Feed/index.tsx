'use client'

import { ChartLineUp } from '@phosphor-icons/react'
import { Ratings } from './subcomponents/Ratings'
import { Readings } from './subcomponents/Readings'
import { IBooksData } from '@/layout/client/types'

export default function Feed({ booksData }: { booksData: IBooksData }) {
  return (
    <main className="pt-14 ml-24 mr-16 grow max-w-[608px]">
      <h1 className="leading-snug flex items-center gap-x-3">
        <ChartLineUp size={32} className="text-Green-100" />
        <strong className="text-Gray-100 text-2xl leading-snug">Início</strong>
      </h1>
      <Readings />
      <Ratings booksData={booksData} />
    </main>
  )
}
