import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IUserModel } from '@/code/db/users'
import { RatingStars } from '../RatingStars'
import { Avatar } from '../../(Users)/Avatar'
import Image from 'next/image'
import { IBookModel } from '@/code/db/books'
import Link from 'next/link'

export function RatingWithBook({
  rating = {
    created_at: '2023-07-04T00:01:33.807Z',
    description: 'Nec tempor nunc in egestas.',
    id: 'aecfc87c-ca03-47af-b524-4ea93dbdc889',
    rate: 4,
    user: {
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
      name: 'Jaxson Dias',
    },
  },
  book,
}: {
  rating?: {
    id: string
    user: IUserModel
    rate: number
    description: string
    created_at: string
  }
  book: IBookModel
}) {
  return (
    <section className="p-6 max-w-[608px] rounded-lg bg-Gray-700 cursor-pointer border-2 hover:border-Gray-600 border-transparent">
      <header className="flex justify-between gap-x-4">
        <Link href={`/feed/profile?user=${rating.user.email}`}>
          <Avatar src={rating.user.image} />
        </Link>
        <div className="grow">
          <strong className="font-normal leading-relaxed block text-Gray-100">
            {rating.user.name}
          </strong>
          <span className="text-Gray-400 leading-relaxed font-normal text-sm block">
            {formatDistanceToNow(new Date(rating.created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </div>
        <RatingStars rate={rating.rate} />
      </header>
      <main className="flex gap-x-5 mt-8 items-stretch">
        <Image
          src={book.cover_url.replace('jpg', 'png').slice(6)}
          width={108}
          height={152}
          alt="Foto de perfil de usuário"
        />
        <div className="grow flex flex-col gap-y-5">
          <div className="flex flex-col">
            <strong className="leading-snug text-Gray-100">{book.name}</strong>
            <span className="text-Gray-400 leading-relaxed font-normal text-sm">
              {book.author}
            </span>
          </div>
          <p className="text-Gray-300 leading-6 font-normal text-justify">
            {rating.description}
          </p>
        </div>
      </main>
    </section>
  )
}
