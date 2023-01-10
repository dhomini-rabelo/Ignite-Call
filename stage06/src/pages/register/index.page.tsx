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

export default function Register() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  useEffect(() => {
    setValue('username', String(router.query.username || ''))
  }, [router.query.username, setValue])

  function onValidSubmit(data: IRegisterSchema) {
    console.log(data)
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
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}
