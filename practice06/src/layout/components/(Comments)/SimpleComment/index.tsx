import { Star } from '@phosphor-icons/react'
import UserIcon from '@/layout/assets/images/user.svg'
import Image from 'next/image'

export function SimpleComment() {
  return (
    <section className="p-6 max-w-[608px] rounded-lg bg-Gray-700">
      <header
        className="flex justify-between gap-x-4"
        style={{ marginBottom: '1.25rem' }}
      >
        <Image
          src={UserIcon}
          width={40}
          height={40}
          alt="Foto de perfil de usuário"
        />
        <div className="grow">
          <strong className="font-normal leading-relaxed block text-Gray-100">
            Jaxson Dias
          </strong>
          <span className="text-Gray-400 leading-relaxed font-normal text-sm block">
            Hoje
          </span>
        </div>
        <div className="flex text-Purple-100 gap-x-1">
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} />
        </div>
      </header>
      <p className="text-Gray-300 leading-6 font-normal text-justify block">
        Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean
        posuere amet ultrices. Cras fermentum id pulvinar velit ipsum. Sed
        vulputate massa velit nibh...
      </p>
    </section>
  )
}
