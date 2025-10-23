import { createContainer, asValue, asClass } from 'awilix';
import { PrismaClient } from '@';
import { UserRepositoryPrisma } from '../prisma/UserRepositoryPrisma.js';
import { CreateUserUseCase } from '../../application/use-cases/CreateUserUseCase.js';

const prisma = new PrismaClient();

// Test the connection
prisma.$connect().catch(error => {
  console.error('Failed to connect to the database:', error);
  console.error(
    'Please make sure MySQL is running and the connection details in .env are correct'
  );
});

const container = createContainer();

container.register({
  prisma: asValue(prisma),
  userRepository: asClass(UserRepositoryPrisma).singleton(),
  createUserUseCase: asClass(CreateUserUseCase).singleton(),
});

export default container;
