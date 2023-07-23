import React from 'react'
import { Nunito } from '@next/font/google'
import '../layout/assets/styles/global.css'

export const metadata = {
  title: 'BookWise',
}

const nunito = Nunito({
  variable: '--nunito',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-Gray-800">
        <div id="__next" className={nunito.variable}>
          {children}
        </div>
      </body>
    </html>
  )
}
