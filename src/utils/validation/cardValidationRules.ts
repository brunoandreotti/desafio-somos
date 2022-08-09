import { body, check } from 'express-validator'

const cardValidationRules = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage(`O campo 'name' é obrigatório!`)
      .bail()
      .isString()
      .withMessage(`O campo 'name' precisa ser uma string!`)
      .bail(),

    body('attributes')
      .notEmpty()
      .withMessage(`O campo 'attributes' é obrigatório!`)
      .bail()
      .isObject()
      .withMessage(`O campo 'attributes' precisa ser um objeto`)
      .bail(),

    check('attributes.hp')
      .notEmpty()
      .withMessage(`O campo 'attributes.hp' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(`O campo 'attributes.hp' precisa ser um número e ser maior que zero!`)
      .bail()
      .isInt({min: 1})
      .withMessage(`O campo 'attributes.hp' precisa ser um número e ser maior que zero!`),
    check('attributes.attack')
      .notEmpty()
      .withMessage(`O campo 'attributes.attack' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.attack' precisa ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({min: 1})
      .withMessage(
        `O campo 'attributes.attack' precisa ser um número e ser maior que zero!`,
      ),
    check('attributes.defense')
      .notEmpty()
      .withMessage(`O campo 'attributes.attributes.defense' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.attributes.defense' precisa ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({min: 1})
      .withMessage(
        `O campo 'attributes.attributes.defense' precisa ser um número e ser maior que zero!`,
      ),
    check('attributes.specialAttack')
      .notEmpty()
      .withMessage(`O campo 'attributes.specialAttack' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.specialAttack' precisa ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({min: 1})
      .withMessage(
        `O campo 'attributes.specialAttack' precisa ser um número e ser maior que zero!`,
      ),
    check('attributes.specialDefense')
      .notEmpty()
      .withMessage(`O campo 'attributes.attributes.specialDefense' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.attributes.specialDefense' precisa ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({min: 1})
      .withMessage(
        `O campo 'attributes.attributes.specialDefense' precisa ser um número e ser maior que zero!`,
      ),
    check('attributes.speed')
      .notEmpty()
      .withMessage(`O campo 'attributes.speed' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.speed' precisa ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({min: 1})
      .withMessage(
        `O campo 'attributes.speed' precisa ser um número e ser maior que zero!`,
      ),
  ]
}

export { cardValidationRules }
