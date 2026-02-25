import { body } from 'express-validator';

export const createPositionValidator = [
  body('name')
    .notEmpty().withMessage('Position name is required')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
    .trim(),

  body('cost')
    .optional()
    .isFloat({ min: 0 }).withMessage('Cost must be a positive number')
    .toFloat(),
];
