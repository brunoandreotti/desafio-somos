import { body, check } from 'express-validator'

const updateCardBodyValidationRule = () => [
  body('name')
    .if(body('name').exists())
    .isString()
    .withMessage(`O campo 'name' precisa ser uma string`)
    .bail(),

    body('attributes')
    .if(body('attributes').exists())
    .isObject()
    .withMessage(`O campo 'attributes' precisa ser um objeto`),

  check('attributes.*')
    .not()
    .isString()
    .withMessage(
      `Os campos de 'attributes' precisam ser um número e ser maior que zero!`,
    )
    .bail()
    .isInt({ min: 1 })
    .withMessage(
      `Os campos de 'attributes' precisam ser um número e ser maior que zero!`,
    ),
]

export { updateCardBodyValidationRule }
