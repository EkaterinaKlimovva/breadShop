import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import type { AppError } from '../app/error';

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error: AppError = new Error('Validation failed');

    error.status = 400;
    error.details = errors.array().map(err => ({
      field: err.type === 'field' ? err.path : 'unknown',
      message: err.msg,
    }));

    return next(error);
  }

  next();
};
