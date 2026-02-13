import { positionRepository } from '../repositories';
import type { Request, Response } from 'express';

export class PositionService {
  public async getPositions(req: Request, res: Response) {
    try {
      const positions = await positionRepository.findAll();

      res.status(200).json({
        success: true,
        data: positions,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch positions',
          detail: error instanceof Error ? error.message : error
      });
    }
  }
}
