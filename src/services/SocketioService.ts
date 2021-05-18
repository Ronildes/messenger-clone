import { Server } from 'socket.io';
import { getRepository } from 'typeorm';

import connectOnRoute from './ConnectOnRoutes';
import CreateMessageService from './CreateMessageService';
import TokenDestructuring from './TokenDestructuring';
import listMessageService from './ListMessagesService';

export default function socketIOService(
  server: any,
  subscribe: any,
  unsubscribe: any,
  unsubscribeAll: any
) {
  const sockets = new Server(server);
  const axios = connectOnRoute().app;

  /*
  subscribe((command: any) => {
    console.log(`> Emitting ${command.type}`);
    sockets.emit(command.type, command);
  });
  */

  sockets.on('connect', socket => {
    console.log(`> user: ${socket.id} connected`);

    function observer(command: any) {
      console.log(
        `> Emitting ${command.type} with security level ${command.securityLevel}`
      );

      sockets.emit(command.type, { command, userId: socket.id });
    }

    subscribe(observer);

    socket.on('login', async data => {
      try {
        const { email, password } = data;

        const route = await axios.post('/', {
          email,
          password,
        });
        socket.emit('login-success', {
          token: route.data.token,
          userId: socket.id,
        });
      } catch (err) {
        socket.emit('login-fail', { userId: socket.id });
      }
    });

    socket.on('subscribe', async data => {
      try {
        const { username, email, password } = data;

        const route = await axios.post('/subscribe', {
          username,
          email,
          password,
        });
        socket.emit('subscribe-success', {
          userId: socket.id,
        });
      } catch (err) {
        socket.emit('subscribe-fail', {
          error: 'this email already begin used',
          userId: socket.id,
        });
        console.log(`> subscribe error: ${err.message} from ${socket.id}`);
      }
    });

    socket.on('send-message', async data => {
      try {
        await axios.post(`/chat/send/${data.token}`, {
          content: data.message,
        });
      } catch (err) {
        console.log(`> send-message error: ${err.message}`);
      }
    });

    socket.on('render-messages', async data => {
      try {
        await axios.get(`/chat/${data}`);
      } catch (err) {
        console.log(`> render-message error: ${err.message}`);
      }
    });

    socket.on('disconnect', () => {
      console.log(`> user: ${socket.id} disconnected`);
      unsubscribeAll();
    });
  });
}
