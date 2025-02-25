import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const codigoPostalValidator = vine.compile(
  vine.object({
    codigo: vine.string().regex(/^\d{4,5}$/),
  })
)

codigoPostalValidator.messagesProvider = new SimpleMessagesProvider({
  'codigo.regex': 'El código postal debe ser un número de 4 o 5 dígitos',
})

export const codigoPostalEstadoValidator = vine.compile(
  vine.object({
    codigo: vine.string().regex(/^\d{3,5}$/),
    estado: vine.number().positive().withoutDecimals().min(1).max(32),
  })
)

codigoPostalEstadoValidator.messagesProvider = new SimpleMessagesProvider({
  'codigo.regex': 'El código postal debe ser un número entre 3 y 5 dígitos',
})
