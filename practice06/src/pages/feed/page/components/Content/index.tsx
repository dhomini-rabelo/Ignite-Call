import { ChartLineUp } from '@phosphor-icons/react'
import { Ratings } from './subcomponents/Ratings'
import { Readings } from './subcomponents/Readings'

export default function Content() {
  return (
    <main className="pt-14 pl-24 grow">
      <h1 className="leading-snug flex items-center gap-x-3">
        <ChartLineUp size={32} className="text-Green-100" />
        <strong className="text-Gray-100 text-2xl leading-snug">Início</strong>
      </h1>
      <Readings />
      <Ratings />
    </main>
  )
}
