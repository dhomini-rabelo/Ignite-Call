import {
  Box,
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  IRegisterSchema,
  registerSchema,
} from '../../code/schemas/validations/user'
import { Form } from '../../styles/form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { client } from '../../code/settings/frontend'
import { AxiosError } from 'axios'

export default function Register() {
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  useEffect(() => {
    setValue('username', String(router.query.username || ''))
  }, [router.query.username, setValue])

  async function onValidSubmit(data: IRegisterSchema) {
    try {
      await client.post('/users', {
        username: data.username,
        name: data.name,
      })
      await router.push('/register/connect-calendar')
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response?.data?.errors?.username
      ) {
        reset(data)
        setError('username', error.response?.data?.errors?.username)
      } else {
        console.log(error)
      }
    }
  }
  return (
    <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
      <header>
        <Heading as="h1" className="font-bold">
          Bem-vindo ao Ignite Call!
        </Heading>
        <Text className="text-Gray-200 mb-6">
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </header>
      <Box
        as="form"
        className="mt-6 flex flex-col gap-4 px-0"
        onSubmit={handleSubmit(onValidSubmit)}
      >
        <label className="flex flex-col gap-2">
          <Text size="sm">Nome do usuário</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="Seu usuário"
            {...register('username')}
          />
          <Form.error>
            {errors.username ? errors.username.message : <>&nbsp;</>}
          </Form.error>
        </label>
        <label className="flex flex-col gap-2">
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" {...register('name')} />
          <Form.error>
            {errors.name ? errors.name.message : <>&nbsp;</>}
          </Form.error>
        </label>
        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}
