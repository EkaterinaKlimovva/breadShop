import { positionRepository } from '../repositories';

export class PositionService {
  public async getPositions() {
    return positionRepository.findAll();
  }
}
