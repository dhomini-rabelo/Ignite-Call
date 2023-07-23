'use client'
import LogoIcon from '@/layout/assets/images/logo.svg'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { A } from './styles'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { AuthModal } from '@/layout/components/AuthModal'

export default function AsideNav({
  isAuthenticated,
}: {
  isAuthenticated: boolean
}) {
  const path = usePathname()

  function handleLogout() {
    signOut()
  }

  return (
    <aside className="max-h-[95vh] my-5">
      <div className="bg-Gray-700 ml-5 pt-10 pb-6 flex flex-col items-center justify-between px-14 h-full">
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
              prefetch={false}
              className="flex gap-x-3 ml-4 relative"
            >
              <div className="bar" />
              <ChartLineUp size={24} />
              <strong className="leading-relaxed">Início</strong>
            </A.NavLink>
            <A.NavLink
              active={path === '/feed/books'}
              href="/feed/books"
              prefetch={false}
              className="flex gap-x-3 ml-4 relative"
            >
              <div className="bar" />
              <Binoculars size={24} />
              <strong className="leading-relaxed">Explorar</strong>
            </A.NavLink>
            {isAuthenticated && (
              <A.NavLink
                active={path === '/feed/profile'}
                href="/feed/profile"
                prefetch={false}
                className="flex gap-x-3 ml-4 relative"
              >
                <div className="bar" />
                <User size={24} />
                <strong className="leading-relaxed">Perfil</strong>
              </A.NavLink>
            )}
          </nav>
        </div>
        {isAuthenticated ? (
          <div
            onClick={handleLogout}
            className="flex gap-x-3 items-center cursor-pointer"
          >
            <strong className="text-Gray-100">Sair</strong>
            <SignOut size={20} className="text-Green-100" />
          </div>
        ) : (
          <AuthModal>
            <div className="flex gap-x-3 items-center cursor-pointer">
              <strong className="text-Gray-100">Fazer Login</strong>
              <SignIn size={20} className="text-Green-100" />
            </div>
          </AuthModal>
        )}
      </div>
    </aside>
  )
}
