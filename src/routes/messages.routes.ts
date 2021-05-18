import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateMessageService from '../services/CreateMessageService';
import ListMessagesService from '../services/ListMessagesService';

function messagesRoutes(notifyAll: any, unsubscribeAll: any) {
  const messagesRouter = Router();

  messagesRouter.get(
    '/:token',
    ensureAuthenticated,
    async (request, response) => {
      const messages = await ListMessagesService();

      notifyAll({
        type: 'previous-messages',
        securityLevel: 'high',
        messages,
      });

      return response.json(messages);
    }
  );

  messagesRouter.post(
    '/send/:token',
    ensureAuthenticated,
    async (request, response) => {
      const { token } = request.params;
      const { content } = request.body;

      const createMessage = new CreateMessageService();
      const message = await createMessage.execute({
        token,
        content,
      });

      notifyAll({
        type: 'created-message',
        securityLevel: 'low',
        message,
      });

      return response.json(message);
    }
  );

  return { messagesRouter };
}
export default messagesRoutes;
