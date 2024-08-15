import { Router } from "express";
import read from "../controllers/restricciones/read.js";
import create from '../controllers/restricciones/create.js'
import destroy from "../controllers/restricciones/destroy.js";

const restricciones_router=Router()
restricciones_router.get('/', read)
restricciones_router.post('/create', create)
restricciones_router.delete('/delete', destroy)

export default restricciones_router