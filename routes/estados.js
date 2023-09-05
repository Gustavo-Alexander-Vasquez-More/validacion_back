import { Router } from "express";
import read from "../controllers/estados/read.js";
const estados_router=Router()

estados_router.get('/', read)
export default estados_router