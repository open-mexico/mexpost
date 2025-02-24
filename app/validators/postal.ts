import vine from '@vinejs/vine'

export const codigoPostalValidator = vine.compile(
  vine.object({
    codigo: vine.string().regex(/^\d{4,5}$/),
  })
)
