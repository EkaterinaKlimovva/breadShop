import type { NextFunction, Request, Response } from 'express';
import type { AppError } from '../app/error';

type responseType = {
  status?: number;
  message: string;
  details?: any[];
}

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);

  res.setHeader('Content-Type', 'application/json');

  const response: responseType = {
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  };

  if (err.details) {
    response.details = err.details;
  }

  return res.status(err.status || 500).json(response);
};
