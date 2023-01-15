import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import {
  ITimerIntervalsInputSchema,
  ITimerIntervalsOutputSchema,
  timerIntervalsSchema,
} from '../../../code/schemas/validations/timerIntervals'
import { client } from '../../../code/settings/frontend'
import { getWeekDays } from '../../../code/utils/date'
import { Form } from '../../../styles/form'
import { Div } from './style'

export default function TimerIntervals() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<ITimerIntervalsInputSchema>({
    resolver: zodResolver(timerIntervalsSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })
  const router = useRouter()
  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })
  const weekdays = getWeekDays()
  const intervals = watch('intervals')

  async function handleSetTimerIntervals(data: any) {
    const formData = data as ITimerIntervalsOutputSchema
    await client.post('users/timer-intervals', {
      intervals: formData.intervals,
    })
    await router.push('/register/update-profile')
  }

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
      <Box
        as="form"
        className="flex flex-col mt-6 px-0"
        onSubmit={handleSubmit(handleSetTimerIntervals)}
      >
        <div className="rounded-lg mb-4 border border-Gray-600">
          {fields.map((field) => (
            <div
              className="flex items-center justify-between py-3 px-4 border-t border-Gray-600"
              key={field.id}
            >
              <div className="flex items-center gap-3">
                <Controller
                  name={`intervals.${field.weekDay}.enabled`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true)
                      }
                      checked={field.value}
                    />
                  )}
                />
                <Text>{weekdays[field.weekDay]}</Text>
              </div>
              <Div.intervals className="flex items-center gap-2">
                <TextInput
                  size="sm"
                  type="time"
                  step="60"
                  disabled={intervals[field.weekDay].enabled === false}
                  {...register(`intervals.${field.weekDay}.startTime`)}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step="60"
                  disabled={intervals[field.weekDay].enabled === false}
                  {...register(`intervals.${field.weekDay}.endTime`)}
                />
              </Div.intervals>
            </div>
          ))}
        </div>
        {errors.intervals && (
          <Form.error className="my-2">{errors.intervals.message}</Form.error>
        )}
        <Button
          disabled={
            intervals.filter((interval) => interval.enabled).length === 0 ||
            isSubmitting
          }
        >
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}
