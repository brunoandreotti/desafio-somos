import { param, query } from 'express-validator'

const pageAndItemParamsValidationRule = () => [
  query('page')
    .if(query('page').exists())
    .isInt({min: 0})
    .withMessage(`O parâmetro 'page' deve ser um número inteiro`)
    .bail(),

    query('items')
    .if(query('items').exists())
    .isInt({min: 0})
    .withMessage(`O parâmetro 'items' deve ser um número inteiro`)
    .bail(),

    query('name')
    .if(query('name').exists())
    .not()
    .isInt()
    .withMessage(`O parâmetro 'name' deve ser uma string`)
    .bail(),
]

export { pageAndItemParamsValidationRule }
