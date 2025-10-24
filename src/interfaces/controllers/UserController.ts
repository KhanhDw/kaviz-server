import { CreateUserUseCase } from '@application/use-cases/CreateUserUseCase.js';
import { SelectAllUserUseCase } from '@application/use-cases/SelectAllUserUseCase.js';

export class UserController {
  private createUserUseCase: CreateUserUseCase;
  private selectAllUserUseCase: SelectAllUserUseCase;

  constructor({
    createUserUseCase,
    selectAllUserUseCase,
  }: {
    createUserUseCase: CreateUserUseCase;
    selectAllUserUseCase: SelectAllUserUseCase;
  }) {
    this.createUserUseCase = createUserUseCase;
    this.selectAllUserUseCase = selectAllUserUseCase;
  }

  selectAll = async (req: any, reply: any) => {
    const users = await this.selectAllUserUseCase.execute();
    return reply.send(users);
  };

  create = async (req: any, reply: any) => {
    const user = await this.createUserUseCase.execute(req.body);
    return reply.send(user);
  };
}
