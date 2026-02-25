import express from 'express';
import { positionController } from '../controller';
import { createPositionValidator } from '../validators';
import { validationMiddleware } from '../middleware/validation';

const router = express.Router();

router.get('/positions', positionController.getPositions);
router.post('/positions',
  createPositionValidator,
  validationMiddleware,
  positionController.createPosition,
);

export default router;
