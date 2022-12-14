import { body, check } from 'express-validator'

const createCardValidationRules = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage(`O campo 'name' é obrigatório!`)
      .bail()
      .isString()
      .withMessage(`O campo 'name' deve ser uma string!`)
      .bail(),

    body('attributes')
      .notEmpty()
      .withMessage(`O campo 'attributes' é obrigatório!`)
      .bail()
      .isObject()
      .withMessage(`O campo 'attributes' deve ser um objeto`)
      .bail(),

    check('attributes.hp')
      .notEmpty()
      .withMessage(`O campo 'attributes.hp' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.hp' deve ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({ min: 1 })
      .withMessage(
        `O campo 'attributes.hp' deve ser um número e ser maior que zero!`,
      ),
    check('attributes.attack')
      .notEmpty()
      .withMessage(`O campo 'attributes.attack' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.attack' deve ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({ min: 1 })
      .withMessage(
        `O campo 'attributes.attack' deve ser um número e ser maior que zero!`,
      ),
    check('attributes.defense')
      .notEmpty()
      .withMessage(`O campo 'attributes.attributes.defense' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.attributes.defense' deve ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({ min: 1 })
      .withMessage(
        `O campo 'attributes.attributes.defense' deve ser um número e ser maior que zero!`,
      ),
    check('attributes.specialAttack')
      .notEmpty()
      .withMessage(`O campo 'attributes.specialAttack' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.specialAttack' deve ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({ min: 1 })
      .withMessage(
        `O campo 'attributes.specialAttack' deve ser um número e ser maior que zero!`,
      ),
    check('attributes.specialDefense')
      .notEmpty()
      .withMessage(
        `O campo 'attributes.attributes.specialDefense' é obrigatório!`,
      )
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.attributes.specialDefense' deve ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({ min: 1 })
      .withMessage(
        `O campo 'attributes.attributes.specialDefense' deve ser um número e ser maior que zero!`,
      ),
    check('attributes.speed')
      .notEmpty()
      .withMessage(`O campo 'attributes.speed' é obrigatório!`)
      .bail()
      .not()
      .isString()
      .withMessage(
        `O campo 'attributes.speed' deve ser um número e ser maior que zero!`,
      )
      .bail()
      .isInt({ min: 1 })
      .withMessage(
        `O campo 'attributes.speed' deve ser um número e ser maior que zero!`,
      ),
  ]
}

export { createCardValidationRules }
