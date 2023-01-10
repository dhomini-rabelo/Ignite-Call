import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { UsernameForm } from './components/UsernameForm'
import { Div } from './styles'

export function Home() {
  return (
    <Div.container className="flex items-center gap-20 ml-auto">
      <div className="max-w-[480px] px-10">
        <Heading as="h1" size="4xl" className="font-bold">
          Agendamento descomplicado
        </Heading>
        <Text size="xl" className="mt-2 text-Gray-200">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <UsernameForm />
      </div>
      <div className="overflow-hidden pr-8">
        <Image
          src="/preview.svg"
          alt="Calendário simulando de maneira simples o funcionamento da aplicação"
          height={372}
          width={764}
          quality={100}
          priority
        />
      </div>
    </Div.container>
  )
}
