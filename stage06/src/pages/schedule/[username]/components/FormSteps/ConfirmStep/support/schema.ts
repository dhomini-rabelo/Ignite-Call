import * as zod from 'zod'
import { ErrorMessages } from '../../../../../../../code/schemas/errors'

export const confirmStepSchema = zod.object({
  name: zod.string().min(1, ErrorMessages.REQUIRED),
  email: zod
    .string()
    .min(1, ErrorMessages.REQUIRED)
    .email(ErrorMessages.INVALID_EMAIL),
  observations: zod.string(),
})

export type IConfirmStepSchema = zod.infer<typeof confirmStepSchema>
