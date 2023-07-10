import { Check, Star, X } from '@phosphor-icons/react'
import { IUserModel } from '@/code/db/users'
import { Avatar } from '@/layout/components/(Users)/Avatar'

export function RatingForm({ user }: { user: IUserModel }) {
  return (
    <section className="p-6 max-w-[608px] rounded-lg bg-Gray-700">
      <header
        className="flex justify-between gap-x-4"
        style={{ marginBottom: '1.25rem' }}
      >
        <Avatar src={user.image} />
        <div className="grow self-center" style={{ alignSelf: 'center' }}>
          <strong className="leading-relaxed block text-Gray-100">
            {user.name}
          </strong>
        </div>
        <div className="flex text-Purple-100 gap-x-1">
          <Star size={16} />
          <Star size={16} />
          <Star size={16} />
          <Star size={16} />
          <Star size={16} />
        </div>
      </header>
      <textarea
        className="text-Gray-200 py-[0.875rem] px-5 bg-Gray-800 w-full rounded-[4px] border border-Green-200"
        style={{ borderColor: 'var(--Green-200)' }}
        rows={5}
      ></textarea>
      <div
        className="flex justify-end mt-3 gap-x-2"
        style={{ justifyContent: 'flex-end', marginTop: '0.75rem' }}
      >
        <button
          className="bg-Gray-600 p-2 text-Purple-100 hover:bg-Gray-500 rounded"
          style={{ padding: '0.5rem' }}
        >
          <X size={24} />
        </button>
        <button
          className="bg-Gray-600 p-2 text-Green-100 hover:bg-Gray-500 rounded"
          style={{ padding: '0.5rem' }}
        >
          <Check size={24} />
        </button>
      </div>
    </section>
  )
}
