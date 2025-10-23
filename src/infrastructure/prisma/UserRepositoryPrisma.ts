import { PrismaClient } from 'prisma/generated/mysql-client/index.js';
import { User } from '@domain/entities/User.js';
import { UserRepository } from '@domain/repositories/UserRepository.js';

export class UserRepositoryPrisma implements UserRepository {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
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
    const users = await this.prisma.user.findMany();
    return users.map(user => new User(user.id, user.name, user.email));
  }
}
