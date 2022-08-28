import express from 'express';
import { createServer } from 'http';


import { handler } from '../build/handler.js';

const port = process.env.PORT || 3000;
const app = express();
const server = createServer(app);


console.log('SocketIO injected');


app.use(handler);

server.listen(port);