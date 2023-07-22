import { IRatingModel } from '@/code/db/books'
import { IUserModel } from '@/code/db/users'

export interface IRatingData extends IRatingModel {
  book: {
    total_pages: number
    author: string
    categories: {
      category: {
        id: string
        name: string
      }
    }[]
  }
}

export interface IUserRatingsData {
  ratings: IRatingData[]
  user: IUserModel
}

export const getUserRatingsData: (
  email: string,
) => Promise<IUserRatingsData> = async (email: string) => {
  const res = await fetch('http://localhost:3000/api/ratings/user', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    return {
      ratings: [],
      user: {
        id: '',
        name: '',
        image: '',
        email: '',
      },
    }
  }
  const responseData = await res.json()
  return responseData.data
}
