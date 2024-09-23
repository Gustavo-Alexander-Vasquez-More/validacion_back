import { Router } from "express";
import create from "../controllers/registro_folios/create.js";
import acountExist2 from "../middlewares/acountExist2.js";
import read_Pag_folios from "../controllers/registro_folios/read_Pag_folios.js"
const registro_folios_router=Router()

registro_folios_router.post('/create', acountExist2, create)
registro_folios_router.post('/create2', create)
registro_folios_router.get('/readPag', read_Pag_folios)
export default registro_folios_router