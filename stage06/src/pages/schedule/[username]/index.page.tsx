import { Avatar, Heading, Text } from '@ignite-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prisma } from '../../../code/settings/backend'
import { ScheduleForm } from './components/FormSteps'

interface Props {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: Props) {
  return (
    <main className="max-w-[852px] px-4 mx-auto mt-20 mb-4">
      <div className="flex flex-col items-center">
        <Avatar src={user.avatarUrl} alt={user.name} />
        <Heading className="leading-relaxed mt-2">{user.name}</Heading>
        <Text className="text-Gray-200">{user.bio}</Text>
      </div>
      <ScheduleForm />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
