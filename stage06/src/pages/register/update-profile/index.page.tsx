import { zodResolver } from '@hookform/resolvers/zod'
import {
  Avatar,
  Box,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@ignite-ui/react'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  IUpdateUserSchema,
  updateUserSchema,
} from '../../../code/schemas/validations/user'
import { client } from '../../../code/settings/frontend'
import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'

export default function TimerIntervals() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IUpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
  })
  const session = useSession()
  const router = useRouter()

  async function handleUpdateUser(data: IUpdateUserSchema) {
    await client.put('users/update-profile', {
      bio: data.bio,
    })
    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
      <header>
        <Heading as="h1" className="font-bold">
          Defina sua disponibilidade
        </Heading>
        <Text className="text-Gray-200 mb-6">
          Por último, uma breve descrição.
        </Text>
        <MultiStep size={4} currentStep={4} />
      </header>
      <Box
        as="form"
        className="flex flex-col mt-6 px-0 gap-4"
        onSubmit={handleSubmit(handleUpdateUser)}
      >
        <label className="flex flex-col gap-2">
          <Text size="sm">Foto de perfil</Text>
          <Avatar
            src={session.data?.user.avatar_url}
            alt={session.data?.user.name}
          />
        </label>
        <label className="flex flex-col gap-2">
          <Text size="sm">Sobre você</Text>
          <TextArea prefix="ignite.com/" {...register('bio')} />
        </label>
        <span className="text-Gray-200">
          Fale um pouco sobre você. Isto será exibido em sua página pessoal.
        </span>
        <Button disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
