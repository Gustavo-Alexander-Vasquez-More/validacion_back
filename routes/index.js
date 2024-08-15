import express from 'express'
import estados_router from './estados.js'
import admins_router from './admins.js';
import clientes_router from './cientes.js';
import restricciones_router from './restricciones.js';
let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/estados', estados_router)
router.use('/admins', admins_router)
router.use('/clientes', clientes_router)
router.use('/restricciones', restricciones_router)
export default router