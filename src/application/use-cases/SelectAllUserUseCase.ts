import { UserRepository } from '@domain/repositories/UserRepository.js';

export class SelectAllUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return await this.userRepository.findAll();
  }
}
