import { Router } from "express";
import create from "../controllers/registro_usuarios/create.js";
import acountExist from "../middlewares/acountExist2.js";
import read_Pag_usuarios from "../controllers/registro_usuarios/read_Pag_usuarios.js";
const registro_usurios_router=Router()

registro_usurios_router.post('/create', acountExist, create )
registro_usurios_router.get('/readPag', read_Pag_usuarios )
export default registro_usurios_router