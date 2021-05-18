import express from 'express';
import cors from 'cors';
import http from 'http';
import { renderFile } from 'ejs';
import { join } from 'path';

import routesFunctions from './src/routes/index';
import socketIO from './src/services/SocketioService';

import './src/database/index';

const app = express();
const server = http.createServer(app);
const { routes, subscribe, unsubscribeAll, unsubscribe } = routesFunctions();
socketIO(server, subscribe, unsubscribeAll, unsubscribe);

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.set('views', join(__dirname, 'public', 'pages'));
app.engine('html', renderFile);
app.set('view engine', 'html');
app.use(routes);

server.listen(3000, () => {
  console.log(' > Listening on port 3000');
});
