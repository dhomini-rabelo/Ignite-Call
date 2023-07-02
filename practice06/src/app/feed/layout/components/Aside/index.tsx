'use client'
import LogoIcon from '@/layout/assets/images/logo.svg'
import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'
import Image from 'next/image'
import { A } from './styles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AsideNav() {
  const path = usePathname()

  return (
    <aside className="ml-5 bg-Gray-700 pt-10 pb-6 flex flex-col items-center justify-between px-14">
      <div>
        <Image
          src={LogoIcon}
          width={128}
          height={32}
          alt="Logo do projeto BookWise"
        />
        <nav className="mt-16 flex flex-col gap-y-4">
          <A.NavLink
            active={path === '/feed'}
            href="/feed"
            className="flex gap-x-3 ml-4 relative"
          >
            <div className="bar" />
            <ChartLineUp size={24} />
            <strong className="leading-relaxed">Início</strong>
          </A.NavLink>
          <A.NavLink
            active={path === '/feed/books'}
            href="/feed/books"
            className="flex gap-x-3 ml-4 relative"
          >
            <div className="bar" />
            <Binoculars size={24} />
            <strong className="leading-relaxed">Explorar</strong>
          </A.NavLink>
          <A.NavLink
            active={path === '/feed/profile'}
            href="/feed/profile"
            className="flex gap-x-3 ml-4 relative"
          >
            <div className="bar" />
            <User size={24} />
            <strong className="leading-relaxed">Perfil</strong>
          </A.NavLink>
        </nav>
      </div>
      <Link href="/" className="flex gap-x-3 items-center">
        <strong className="text-Gray-100">Fazer Login</strong>
        <SignIn size={20} className="text-Green-100" />
      </Link>
    </aside>
  )
}
