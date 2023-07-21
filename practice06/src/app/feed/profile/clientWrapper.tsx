'use client'
import { SessionProvider } from 'next-auth/react'
import ProfileData from './components/ProfileData'
import { Ratings } from './components/Ratings'
import { IUserRatingsData } from '@/layout/client/ratings'

export function ProfilePageClientWrapper({ data }: { data: IUserRatingsData }) {
  return (
    <SessionProvider>
      <Ratings />
      <ProfileData />
    </SessionProvider>
  )
}
