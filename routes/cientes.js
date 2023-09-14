import { Router } from "express";
import read from "../controllers/clientes/read.js";
import create from '../controllers/clientes/create.js'
import update from "../controllers/clientes/update.js";
import multer from "multer";
const upload = multer({ dest:'uploads/'});
const clientes_router=Router()
clientes_router.get('/', read)
clientes_router.post('/create', create)
clientes_router.put('/update/:nombre', update)

export default clientes_router