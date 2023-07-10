import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { Adapter } from 'next-auth/adapters'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      profile: (userProfile: GoogleProfile) => ({
        id: userProfile.sub,
        name: userProfile.name,
        email: userProfile.email,
        image: userProfile.picture,
      }),
    }),

    // ...add more providers here
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl })
      return `${baseUrl}/`
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
