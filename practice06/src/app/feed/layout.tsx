import React from 'react'
import AsideNav from './layout/components/Aside'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export const metadata = {
  title: 'BookWise | Feed',
}

export default async function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <main className="grow bg-Gray-800 text-Gray-100 flex">
      <AsideNav isAuthenticated={!!(session && session.user)} />
      {children}
    </main>
  )
}
