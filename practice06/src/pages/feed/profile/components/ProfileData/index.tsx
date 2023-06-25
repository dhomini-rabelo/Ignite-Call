import UserIcon from '@/layout/assets/images/user.svg'
import Image from 'next/image'

export default function ProfileData() {
  return (
    <aside className="pt-32 pl-16 pr-24 grow flex flex-col items-center">
      <Image
        src={UserIcon}
        width={72}
        height={72}
        alt="Foto de perfil de usuário"
      />
      <div className="mt-5 w-full text-center">
        <h2 className="leading-5 block text-Gray-100 font-bold text-xl">
          Jaxson Dias
        </h2>
        <span className="text-Gray-400 leading-6 font-normal text-sm block">
          membro desde 2019
        </span>
      </div>
    </aside>
  )
}
