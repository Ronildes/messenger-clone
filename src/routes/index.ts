import { Router } from 'express';

import pagesRouter from './pages.routes';
import sessionsRouterFunction from './sessions.routes';
import usersRouterFunction from './users.routes';
import messagesRouterFunction from './messages.routes';

function createRoutes() {
  // @ts-ignore
  let observers = [];

  function subscribe(observerFunction: any) {
    observers.push(observerFunction);
  }

  function unsubscribe(command: any) {
    observers = observers.filter(subscriber => subscriber === command);
    console.log(`observersArrayCount: ${observers.length}`);
  }

  function unsubscribeAll() {
    observers.slice(0, observers.length);
    console.log(`observersArrayCount: ${observers.length}`);
  }

  function notifyAll(command: any) {
    // @ts-ignore
    for (const observerFunction of observers) {
      console.log(`> notifying ${observers.length} observers`);
      observerFunction(command);
    }
  }
  const routes = Router();

  const { sessionsRouter } = sessionsRouterFunction(notifyAll);
  const { messagesRouter } = messagesRouterFunction(notifyAll, unsubscribeAll);
  const { usersRouter } = usersRouterFunction(notifyAll);

  routes.use('/', pagesRouter);
  routes.use('/', sessionsRouter);
  routes.use('/subscribe', usersRouter);
  routes.use('/chat', messagesRouter);

  return {
    routes,
    subscribe,
    unsubscribe,
    unsubscribeAll,
  };
}

export default createRoutes;
