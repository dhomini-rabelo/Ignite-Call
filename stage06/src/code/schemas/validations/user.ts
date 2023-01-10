import * as zod from 'zod'
import { DynamicErrorMessage, ErrorMessages } from '../errors'

export const claimUsernameSchema = zod.object({
  username: zod
    .string()
    .min(3, DynamicErrorMessage.minLength(3))
    .regex(/^([a-z\\-]+)/i, 'Use somente letras e hífen')
    .transform((v) => v.toLocaleLowerCase()),
})

export type IClaimUsernameSchema = zod.infer<typeof claimUsernameSchema>

export const registerSchema = claimUsernameSchema.extend({
  name: zod
    .string()
    .min(1, ErrorMessages.REQUIRED)
    .transform((v) => v.toLocaleLowerCase()),
})

export type IRegisterSchema = zod.infer<typeof registerSchema>
