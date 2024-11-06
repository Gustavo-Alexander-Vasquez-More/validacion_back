import app from '../app.js';
import debug from 'debug';
import http from 'http';
import { Server } from 'socket.io';  // Importa Server desde socket.io
import bodyParser from 'body-parser';

const logger = debug('levantando-new-server');
let port = normalizePort(process.env.PORT || '8084');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', port);

const server = http.createServer(app);
const io=new Server(server, {
  cors:{origin: '*'}
})
io.on('connection', (socket) => {
  socket.on('create_alta', (usuario) => {
    io.emit('discount_folio', usuario);
    });
})
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
