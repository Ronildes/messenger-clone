import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const pagesRouter = Router();

pagesRouter.get('/', (request, response) => {
  return response.render('home.html');
});

pagesRouter.get('/login', (request, response) => {
  return response.render('home.html');
});

pagesRouter.get('/subscribe', (request, response) => {
  return response.render('subscribe.html');
});

pagesRouter.get('/chat', (request, response) => {
  response.render('chat.html');
});

export default pagesRouter;
