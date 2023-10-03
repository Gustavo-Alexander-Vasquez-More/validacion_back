// Importa las librerías necesarias
import 'dotenv/config.js';
import './config/db.js';
import { __dirname } from './utils.js';
import cors from 'cors';
import express from 'express';
import expressWs from 'express-ws';
import indexRouter from './routes/index.js';
import logger from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const { app: appWithWs, getWss } = expressWs(app);

app.disable('etag');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/api', indexRouter);
app.use('/uploads', express.static('uploads'));
app.use((req, res, next) => {
  console.log('Time: ', new Date().getFullYear());
  next();
});

// Configura una ruta para las conexiones WebSocket
appWithWs.ws('/socket', (ws, req) => {
  console.log('Usuario conectado al WebSocket');

  // Escucha mensajes desde el cliente
  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);

    // Puedes enviar mensajes de vuelta al cliente
    ws.send('Mensaje recibido por el servidor: ' + message);
  });

  // Maneja la desconexión del cliente
  ws.on('close', () => {
    console.log('Usuario desconectado del WebSocket');
  });
});

export default app;
