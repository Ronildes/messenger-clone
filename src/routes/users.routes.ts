import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

function usersRoutesFunction(notifyAll: any) {
  const usersRouter = Router();
  usersRouter.post('/', async (request, response) => {
    try {
      const { username, email, password } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        username,
        email,
        password,
      });

      // @ts-expect-error
      delete user.password;

      notifyAll({
        type: 'subscribe-success',
        securityLevel: 'high',
      });

      return response.json(user);
    } catch (err) {
      notifyAll({
        type: 'subscribe-error',
        error: err.message,
        securityLevel: 'high',
      });

      return response.status(400).json({ error: err.message });
    }
  });
  return { usersRouter };
}

export default usersRoutesFunction;
