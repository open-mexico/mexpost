import vine from '@vinejs/vine'

export const searchByMunicipioValidator = vine.compile(
  vine.object({
    municipio: vine.string().trim().minLength(3).maxLength(64),
    estado: vine.number().positive().withoutDecimals().min(1).max(32)
  })
)
