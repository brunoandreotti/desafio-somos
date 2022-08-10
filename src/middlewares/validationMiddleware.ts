import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { AppError } from '../utils/AppError'

const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors: any = []
  errors.array().map(err => extractedErrors.push(err.msg))

  throw new AppError(extractedErrors)
}

export { validationMiddleware }
