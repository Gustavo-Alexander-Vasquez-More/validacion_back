import { Router } from "express";
import create from "../controllers/admins/create.js";
import Validator from '../middlewares/validator.js'
import createAdmin from '../schemas/createAdmin.js'
import Hash from '../middlewares/createHash.js'
import acountExist from "../middlewares/acountExist.js";
import signIn from "../controllers/admins/signIn.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import generateToken from '../middlewares/generateToken.js'
import loginAdmin from '../schemas/loginVal.js'
import Passport from '../middlewares/passport.js'
import signOut from '../controllers/admins/signOut.js'
import read from '../controllers/admins/read.js'
import destroy from "../controllers/admins/destroy.js";
import update from "../controllers/admins/update.js";
import userExist from "../middlewares/userExist.js";


const admins_router=Router()

admins_router.post('/create',Validator(createAdmin), acountExist , Hash ,create)
admins_router.post('/login', Validator(loginAdmin), userExist, passwordIsOk, generateToken, signIn)
admins_router.post('/logout', Passport.authenticate('jwt', { session:false }),signOut)
admins_router.get('/',read)
admins_router.delete('/delete', destroy)
admins_router.put('/update/:usuario', update)
admins_router.put('/updatePassword/:usuario', Hash, update)
export default admins_router