import { Router } from "express";
import read from "../controllers/clientes/read.js";
import create from '../controllers/clientes/create.js'
import update from "../controllers/clientes/update.js";
import checkFolioExists from "../middlewares/checkFolioExist.js";
import destroy from "../controllers/clientes/destroy.js";
import readAuthor from "../controllers/clientes/readAuthor.js";
import multer from "multer";
const upload = multer({ dest:'uploads/'});
const clientes_router=Router()
clientes_router.get('/', read)
clientes_router.get('/author', readAuthor)
clientes_router.post('/create', checkFolioExists, create)
clientes_router.put('/update/:folio', update)
clientes_router.delete('/delete', destroy)

export default clientes_router