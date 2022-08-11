import { body } from 'express-validator'

const updateCardBodyValidationRule = () => {
  return [
    body('attributes')
      .notEmpty()
      .withMessage(`O campo 'attributes' é obrigatório!`)
      .bail()
      .isObject()
      .withMessage(`O campo 'attributes' precisa ser um objeto`)
      .bail()
      .not()
      .contains(['hp']),
  ]
}

export { updateCardBodyValidationRule }
