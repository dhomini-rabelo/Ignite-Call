import * as zod from 'zod'
import { convertTimeStringInMinutes } from '../../utils/date'
import { DynamicErrorMessage } from '../errors'

export const timerIntervalsSchema = zod.object({
  intervals: zod
    .array(
      zod.object({
        weekDay: zod
          .number()
          .min(0, DynamicErrorMessage.minValue(0))
          .max(6, DynamicErrorMessage.maxValue(6)),
        enabled: zod.boolean(),
        startTime: zod.string(),
        endTime: zod.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine(
      (intervals) => intervals.length > 0,
      'Você precisa selecionar pelo menos um dia da semana',
    )
    .transform((intervals) =>
      intervals.map((interval) => ({
        weekDay: interval.weekDay,
        startTimeInMinutes: convertTimeStringInMinutes(interval.startTime),
        endTimeInMinutes: convertTimeStringInMinutes(interval.endTime),
      })),
    )
    .refine(
      (intervals) =>
        intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        ),
      'O horário de termino deve ser pelo menos uma hora depois do início',
    ),
})

export type ITimerIntervalsInputSchema = zod.input<typeof timerIntervalsSchema>
export type ITimerIntervalsOutputSchema = zod.output<
  typeof timerIntervalsSchema
>
