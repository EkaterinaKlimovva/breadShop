import { prisma } from '../db/client';
import type { TCreatePosition } from '../types/positions';

export class PositionRepository {
  public async findAll() {
    return prisma.position.findMany();
  }

  public async create (data: TCreatePosition) {
    return prisma.position.create({ data });
  }
}
