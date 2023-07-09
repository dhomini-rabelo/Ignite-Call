'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import GoogleIcon from '@/layout/assets/images/google.svg'

export function GoogleLogin() {
  function signWithGoogle() {
    signIn('google')
  }

  return (
    <button
      className="w-full bg-Gray-600 rounded-lg flex items-center gap-x-5 text-Gray-200 py-5 px-6"
      onClick={signWithGoogle}
    >
      <Image src={GoogleIcon} width={32} height={32} alt="Logo do Google" />
      <strong>Entrar com Google</strong>
    </button>
  )
}
