import { PrismaClient } from '../../../prisma/generated/mysql-client/index.js';
import type { User as PrismaUser } from '../../../prisma/generated/mysql-client/index.js';
import { User } from '@domain/entities/User.js';
import { UserRepository } from '@domain/repositories/UserRepository.js';

export class UserRepositoryPrisma extends UserRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super();
    this.prisma = prisma;
  }

  async save(user: User): Promise<User> {
    const savedUser = await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(),
      },
    });
    return new User(savedUser.id, savedUser.name, savedUser.email);
  }

  async findAll(): Promise<User[]> {
    // Add logging to debug the issue
    console.log('Prisma client:', this.prisma);
    if (!this.prisma) {
      throw new Error('Prisma client is not initialized');
    }

    if (!this.prisma.user) {
      throw new Error('Prisma user model is not available');
    }

    const users = await this.prisma.user.findMany();
    return users.map((u: PrismaUser) => new User(u.id, u.name, u.email));
  }
}
