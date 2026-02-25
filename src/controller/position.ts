import { positionService } from '../services';
import type { Request, Response } from 'express';


export class PositionController {
  public async getPositions(req: Request, res: Response) {
    res.json(await positionService.getPositions());
  }

  public async createPosition(req: Request, res: Response) {
    res.json(await positionService.createPosition(req.body));
  }
}
