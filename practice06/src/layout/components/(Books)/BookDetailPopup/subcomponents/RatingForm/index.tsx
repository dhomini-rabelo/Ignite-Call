import { Check, Star, X } from '@phosphor-icons/react'
import { IUserModel } from '@/code/db/users'
import { Avatar } from '@/layout/components/(Users)/Avatar'
import { FormEvent, useRef, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import axios from 'axios'
import { activeBookInPopupAtom } from '../..'
import { useAtom } from 'jotai'

export function RatingForm({
  user,
  bookId,
}: {
  user: IUserModel
  bookId: string
}) {
  const [book, setActiveBookInPopup] = useAtom(activeBookInPopupAtom)
  const [rate, setRate] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<null | HTMLTextAreaElement>(null)

  async function handleRegisterRatingAtSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(e)
    e.preventDefault()
    if (
      !textareaRef.current ||
      (textareaRef.current && textareaRef.current.value === '') ||
      rate < 1 ||
      rate > 5
    ) {
      window.alert('Formulário inválido') //! Never
    }
    try {
      setIsLoading(true)
      const response = await axios.post('/api/ratings', {
        description: textareaRef.current!.value,
        rate,
        bookId,
      })
      setActiveBookInPopup({
        ...book!,
        ratings: [
          {
            id: response.data.id,
            created_at: response.data.created_at,
            rate: response.data.rate,
            description: response.data.description,
            user: response.data.user,
          },
          ...book!.ratings,
        ],
      })
    } catch {
      window.alert('Não foi possível registrar o formulário') //! Never
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      className="p-6 max-w-[608px] rounded-lg bg-Gray-700"
      onSubmit={handleRegisterRatingAtSubmit}
    >
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
          {[1, 2, 3, 4, 5].map((index) => (
            <Star
              size={16}
              key={uuidV4()}
              onClick={() => setRate(index)}
              className="hover:w-[20px] hover:h-[20px] cursor-pointer"
              weight={index <= rate ? 'fill' : 'regular'}
            />
          ))}
        </div>
      </header>
      <textarea
        className="text-Gray-200 py-[0.875rem] px-5 bg-Gray-800 w-full rounded-[4px] border border-Green-200"
        style={{ borderColor: 'var(--Green-200)' }}
        rows={5}
        ref={textareaRef}
        required
      ></textarea>
      <div
        className="flex justify-end mt-3 gap-x-2"
        style={{ justifyContent: 'flex-end', marginTop: '0.75rem' }}
      >
        <button
          className="bg-Gray-600 p-2 text-Purple-100 hover:bg-Gray-500 rounded"
          style={{ padding: '0.5rem' }}
          type="reset"
          disabled={isLoading}
        >
          <X size={24} />
        </button>
        <button
          className="bg-Gray-600 p-2 text-Green-100 hover:bg-Gray-500 rounded"
          style={{ padding: '0.5rem' }}
          type="submit"
          disabled={isLoading}
        >
          <Check size={24} />
        </button>
      </div>
    </form>
  )
}
