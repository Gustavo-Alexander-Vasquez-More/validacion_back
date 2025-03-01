import { Router } from "express";
import read from "../controllers/clientes/read.js";
import create from '../controllers/clientes/create.js'
import update from "../controllers/clientes/update.js";
import checkFolioExists from "../middlewares/checkFolioExist.js";
import destroy from "../controllers/clientes/destroy.js";
import readAuthor from "../controllers/clientes/readAuthor.js";
import LeerTodos from "../controllers/clientes/leerTodos.js";
import search_clientes from "../controllers/clientes/search_clientes.js";
import multer from "multer";
import search_clientes_author from "../controllers/clientes/search_clientes_author.js";

const upload = multer({ dest:'uploads/'});
const clientes_router=Router()
clientes_router.get('/', read)
clientes_router.get('/search', search_clientes)
clientes_router.get('/search_author', search_clientes_author)
clientes_router.get('/todos', LeerTodos)
clientes_router.get('/author', readAuthor)
clientes_router.post('/create', checkFolioExists, create)
clientes_router.put('/update/:folio', update)
clientes_router.delete('/delete', destroy)

export default clientes_router