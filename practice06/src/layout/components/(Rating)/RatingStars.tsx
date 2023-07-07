import { Star } from '@phosphor-icons/react'

export function RatingStars({ rate }: { rate: number }) {
  return (
    <div className="flex text-Purple-100 gap-x-1">
      {[1, 2, 3, 4, 5].map((value) =>
        value <= rate ? (
          <Star size={16} weight="fill" key={value} />
        ) : (
          <Star size={16} key={value} />
        ),
      )}
    </div>
  )
}
