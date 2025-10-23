import { CreateUserUseCase } from '../../application/use-cases/CreateUserUseCase.js';

export class UserController {
  createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  create = async (req: any, reply: any) => {
    const user = await this.createUserUseCase.execute(req.body);
    return reply.send(user);
  };
}
