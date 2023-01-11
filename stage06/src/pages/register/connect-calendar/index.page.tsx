import { Box, Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { Form } from '../../../styles/form'

export default function Register() {
  const router = useRouter()
  const session = useSession()

  const permissionsWasRejected = !!router.query.error

  console.log(session)

  // async function onValidSubmit(data) { }

  return (
    <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
      <header>
        <Heading as="h1" className="font-bold">
          Conecte sua agenda!
        </Heading>
        <Text className="text-Gray-200 mb-6">
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </header>
      <Box className="mt-6 flex flex-col gap-4 px-0">
        <div className="flex items-center justify-between border border-Gray-600 px-4 px6 rounded-lg">
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </div>
        {permissionsWasRejected && (
          <Form.error>
            Habilite as permissões ao Google Calendar para continuar
          </Form.error>
        )}
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}
