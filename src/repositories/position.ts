import { prisma } from '../db/client';

export class PositionRepository {
  public async findAll() {
    return prisma.position.findMany();
  }
}
