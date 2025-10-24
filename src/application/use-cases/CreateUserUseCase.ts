import { randomUUID } from 'crypto';
import { User } from '@domain/entities/User.js';
import { UserRepository } from '@domain/repositories/UserRepository.js';

export class CreateUserUseCase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email }: { name: string; email: string }) {
    const user = new User(randomUUID(), name, email);
    return await this.userRepository.save(user);
  }
}
