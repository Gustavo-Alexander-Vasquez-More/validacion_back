import { Router } from "express";
import read from "../controllers/clientes/read.js";
import create from '../controllers/clientes/create.js'

import multer from "multer";
const upload = multer({ dest:'uploads/'});
const clientes_router=Router()
clientes_router.get('/', read)
clientes_router.post('/create',upload.single('foto'), create)

export default clientes_router