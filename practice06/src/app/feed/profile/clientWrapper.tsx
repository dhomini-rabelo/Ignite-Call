'use client'
import { SessionProvider } from 'next-auth/react'
import ProfileData from './components/ProfileData'
import { Ratings } from './components/Ratings'

export function ProfilePageClientWrapper() {
  return (
    <SessionProvider>
      <Ratings />
      <ProfileData />
    </SessionProvider>
  )
}
