import { body } from 'express-validator'

const duelBodyValidationRule = () => [
  body('playerOneCard')
    .notEmpty()
    .withMessage(`O campo 'playerOneCard' é obrigatório!`)
    .bail()
    .not()
    .isString()
    .withMessage(
      `O campo 'playerOneCard' deve ser um número e ser maior que zero!`,
    )
    .isInt({min: 1})
    .withMessage(`O campo 'playerOneCard' deve ser um número e ser maior que zero!`),

  body('playerTwoCard')
    .notEmpty()
    .withMessage(`O campo 'playerTwoCard' é obrigatório!`)
    .bail()
    .not()
    .isString()
    .withMessage(`O campo 'playerTwoCard' deve ser um número e ser maior que zero!`)
    .bail()
    .isInt({min: 1})
    .withMessage(`O campo 'playerTwoCard' deve ser um número e ser maior que zero!`)   
    
]

export { duelBodyValidationRule }
