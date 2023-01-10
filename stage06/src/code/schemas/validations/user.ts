import * as zod from 'zod'

export const claimUsernameSchema = zod.object({
  username: zod
    .string()
    .min(3, 'Use mais que 3 letras')
    .regex(/^([a-z\\-]+)/i, 'Use somente letras e hífen')
    .transform((v) => v.toLocaleLowerCase()),
})

export type IClaimUsernameSchema = zod.infer<typeof claimUsernameSchema>
