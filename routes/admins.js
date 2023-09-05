import { Router } from "express";
import create from "../controllers/admins/create.js";
import Validator from '../middlewares/validator.js'
import createAdmin from '../schemas/createAdmin.js'
const admins_router=Router()

admins_router.post('/create', Validator(createAdmin),create)
export default admins_router