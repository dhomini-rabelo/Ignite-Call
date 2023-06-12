import LogoIcon from '@/layout/assets/images/logo.svg'
import { ChartLineUp } from '@phosphor-icons/react'
import Image from 'next/image'
import { Div } from './styles'

export default function AsideNav() {
  return (
    <aside className="ml-5 bg-Gray-700 pt-10 pb-6 flex flex-col items-center justify-between px-14">
      <div>
        <Image
          src={LogoIcon}
          width={128}
          height={32}
          alt="Logo do projeto BookWise"
        />
        <nav className="block mt-16">
          <a href="" className="flex gap-x-3 ml-4">
            <Div.bar />
            <ChartLineUp size={24} />
            <strong className="text-Gray-100 leading-relaxed">Início</strong>
          </a>
        </nav>
      </div>
    </aside>
  )
}
