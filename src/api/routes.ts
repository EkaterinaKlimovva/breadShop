import express from 'express';
import { positionController } from '../controller';

const router = express.Router();

router.get('/positions', positionController.getPositions);

export default router;
