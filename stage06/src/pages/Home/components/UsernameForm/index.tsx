import { Box, Button, TextInput, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  claimUsernameSchema,
  IClaimUsernameSchema,
} from '../../../../code/schemas/validations/user'
import { useRouter } from 'next/router'

export function UsernameForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IClaimUsernameSchema>({
    resolver: zodResolver(claimUsernameSchema),
  })

  async function onValidSubmit(data: IClaimUsernameSchema) {
    await router.push(`/register?username=${data.username}`)
  }

  return (
    <>
      <Box
        as="form"
        className="flex gap-2 mt-4 p-2 mb:flex-col"
        onSubmit={handleSubmit(onValidSubmit, (e) => console.log(e))}
      >
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="Seu usuário"
          className="grow"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight size={20} />
        </Button>
      </Box>
      <div className="mt-2 px-4">
        <Text size="sm">
          {errors.username ? (
            <span className="text-red-400">{errors.username.message}</span>
          ) : (
            <span className="text-Gray-100">Nome do usuário</span>
          )}
        </Text>
      </div>
    </>
  )
}
