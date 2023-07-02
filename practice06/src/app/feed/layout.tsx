import React from 'react'
import AsideNav from './layout/components/Aside'

export const metadata = {
  title: 'BookWise | Feed',
}

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grow bg-Gray-800 py-5 text-Gray-100 flex">
      <AsideNav />
      {children}
    </main>
  )
}
