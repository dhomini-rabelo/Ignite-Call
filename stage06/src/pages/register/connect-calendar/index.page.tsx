import { Box, Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import { Form } from '../../../styles/form'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const permissionsWasRejected = !!router.query.error
  const isLoading = session.status === 'loading'
  const isAuthenticated =
    session.status === 'authenticated' && !permissionsWasRejected

  console.log(session)

  function handleLogin() {
    signIn('google')
  }

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
          {isAuthenticated ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleLogin}
              disabled={isLoading}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </div>
        {permissionsWasRejected && (
          <Form.error>
            Habilite as permissões ao Google Calendar para continuar
          </Form.error>
        )}
        <Button type="submit" disabled={!isAuthenticated || isLoading}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}
