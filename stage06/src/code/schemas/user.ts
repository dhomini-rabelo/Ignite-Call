import * as zod from 'zod'

export const claimUsernameSchema = zod.object({
  username: zod
    .string()
    .min(3, 'Mínimo de 3')
    .regex(/^([a-z\\-]+)/i)
    .transform((v) => v.toLocaleLowerCase()),
})

export type IClaimUsernameSchema = zod.infer<typeof claimUsernameSchema>
