import { Box, Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export function UsernameForm() {
  return (
    <Box as="form" className="flex gap-2 mt-4 p-2 mb:flex-col">
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="Seu usuário"
        className="grow"
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight size={20} />
      </Button>
    </Box>
  )
}
