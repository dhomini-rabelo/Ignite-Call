import {
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Div } from './style'

export default function TimerIntervals() {
  return (
    <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
      <header>
        <Heading as="h1" className="font-bold">
          Quase lá
        </Heading>
        <Text className="text-Gray-200 mb-6">
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </header>
      <Box as="form" className="flex flex-col mt-6 px-0">
        <div className="rounded-lg mb-4 border border-Gray-600">
          <div className="flex items-center justify-between py-3 px-4 border-t border-Gray-600">
            <div className="flex items-center gap-3">
              <Checkbox />
              <Text>Segunda-feira</Text>
            </div>
            <Div.intervals className="flex items-center gap-2">
              <TextInput size="sm" type="time" step="60" />
              <TextInput size="sm" type="time" step="60" />
            </Div.intervals>
          </div>
        </div>
        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}
