import { createContainer, asValue, asClass, InjectionMode } from 'awilix';
import { PrismaClient } from '../../../prisma/generated/mysql-client/index.js';
import { UserRepositoryPrisma } from '../prisma/UserRepositoryPrisma.js';
import { CreateUserUseCase } from '@application/use-cases/CreateUserUseCase.js';
import { SelectAllUserUseCase } from '@application/use-cases/SelectAllUserUseCase.js';

const prisma = new PrismaClient();

// Test the connection
prisma.$connect().catch((error: Error) => {
  console.error('Failed to connect to the database:', error);
  console.error(
    'Please make sure MySQL is running and the connection details in .env are correct'
  );
});

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC, // Explicitly set injection mode
});

container.register({
  prisma: asValue(prisma),
  userRepository: asClass(UserRepositoryPrisma).singleton(),
  createUserUseCase: asClass(CreateUserUseCase).singleton(),
  selectAllUserUseCase: asClass(SelectAllUserUseCase).singleton(),
});

export default container;
