import { User } from '@domain/entities/User.js';

export abstract class UserRepository {
  abstract save(user: User): Promise<User>;
  abstract findAll(): Promise<User[]>;
}
