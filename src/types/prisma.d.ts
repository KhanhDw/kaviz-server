declare module '@prisma/mysql-client' {
  import type { PrismaClient, User } from '../prisma/generated/mysql-client/index';
  export { PrismaClient, User };
}