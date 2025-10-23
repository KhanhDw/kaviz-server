import { UserController } from '../controllers/UserController.js';

export async function userRoutes(app: any, container: any) {
  const controller = new UserController(container.resolve('createUserUseCase'));
  app.post('/users', controller.create);
}
