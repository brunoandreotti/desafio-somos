import { param } from 'express-validator'

const idParamValidationRules = () => {
  return [
    param('id')
    .isString()
    .withMessage('O parâmetro deve ser um número inteiro')
    .bail()
    .isInt()
    .withMessage('O parâmetro deve ser um número inteiro')
  ]
}

export { idParamValidationRules }