import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { confirmStepSchema, IConfirmStepSchema } from './support/schema'
import { Form } from '../../../../../../styles/form'
import dayjs from 'dayjs'

interface Props {
  schedulingDate: Date
}

export function ConfirmStep({ schedulingDate }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IConfirmStepSchema>({
    resolver: zodResolver(confirmStepSchema),
  })
  const schedulingDateInfo = {
    formattedHour: dayjs(schedulingDate).format('HH:mm[h]'),
    dayDescription: dayjs(schedulingDate).format('DD[ de ]MMMM'),
  }

  function handleConfirmSchedule(data: IConfirmStepSchema) {
    console.log(data)
  }

  return (
    <Box
      as="form"
      className="max-w-[540px] mt-6 mx-auto flex flex-col gap-4"
      onSubmit={handleSubmit(handleConfirmSchedule)}
    >
      <div className="flex items-center gap-4 pb-6 mb-2 border border-Gray-600">
        <Text className="flex items-center gap-2">
          <CalendarBlank className="text-Gray-200" size={20} />
          {schedulingDateInfo.dayDescription}
        </Text>
        <Text className="flex items-center gap-2">
          <Clock className="text-Gray-200" size={20} />
          {schedulingDateInfo.formattedHour}
        </Text>
      </div>

      <label className="flex flex-col gap-2">
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        <Form.error>
          {errors.name ? errors.name.message : <>&nbsp;</>}
        </Form.error>
      </label>

      <label className="flex flex-col gap-2">
        <Text size="sm">Email</Text>
        <TextInput
          type="email"
          placeholder="example@email.com"
          {...register('email')}
        />
        <Form.error>
          {errors.email ? errors.email.message : <>&nbsp;</>}
        </Form.error>
      </label>

      <label className="flex flex-col gap-2">
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <div className="flex justify-end gap-2 mt-2">
        <Button type="button" variant="tertiary" disabled={isSubmitting}>
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </div>
    </Box>
  )
}
