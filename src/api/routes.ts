import express from 'express';
import { positionService } from '../services';

const router = express.Router();

router.get('/positions', positionService.getPositions);

export default router;
