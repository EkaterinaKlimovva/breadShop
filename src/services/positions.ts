import { positionRepository } from '../repositories';
import type { TCreatePosition } from '../types/positions';

export class PositionService {
  public async getPositions() {
    return positionRepository.findAll();
  }

  public async createPosition(data: TCreatePosition) {
    const position: TCreatePosition = {
      name: data.name,
      cost: data.cost,
      isActive: true,
    };

    return positionRepository.create(position);
  }
}
