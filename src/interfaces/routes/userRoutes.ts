import { UserController } from '../controllers/UserController.js';

export async function userRoutes(app: any, container: any) {
  const controller = new UserController({
    createUserUseCase: container.resolve('createUserUseCase'),
    selectAllUserUseCase: container.resolve('selectAllUserUseCase')
  });
  app.get('/users', controller.selectAll);
  app.post('/users', controller.create);
}
