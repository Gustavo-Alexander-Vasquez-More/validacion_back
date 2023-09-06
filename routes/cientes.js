import { Router } from "express";
import read from "../controllers/clientes/read.js";
const clientes_router=Router()

clientes_router.get('/', read)
export default clientes_router