import app from '../app.js';
import debug from 'debug';
import http from 'http';
import { Server as SocketServer } from 'socket.io';  // Importa Server desde socket.io
import bodyParser from 'body-parser';

const logger = debug('levantando-new-server');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = normalizePort(process.env.PORT || '8084');
app.set('port', port);

const server = http.createServer(app);
function ready() {
  console.log('Your server it´s ready on port' + port);
}
const httpServer=server.listen(port, ready);
 const Io = new SocketServer(httpServer);  // Configura Socket.io con el servidor
 export default Io

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
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
