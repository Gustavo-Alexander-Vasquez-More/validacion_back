import app from '../app.js';
import debug from 'debug';
import http from 'http';
import expressWs from 'express-ws';  // Importa expressWs desde express-ws
import bodyParser from 'body-parser';

const logger = debug('levantando-new-server');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { app: expressApp, getWss } = expressWs(app);

let port = normalizePort(process.env.PORT || '8084');
app.set('port', port);

let server = http.createServer(expressApp);

expressApp.ws('/socket', (ws, req) => {
  console.log('Usuario conectado al WebSocket');

  // Aquí puedes escuchar eventos y realizar acciones cuando se emiten desde el cliente
  // Ejemplo: ws.on('message', (message) => { console.log(message); });

  ws.on('close', () => {
    console.log('Usuario desconectado del WebSocket');
  });
});

function ready() {
  console.log('Your server it´s ready on port ' + port);
}

server.listen(port, ready);

server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
