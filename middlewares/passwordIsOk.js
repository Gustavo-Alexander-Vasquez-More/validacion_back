import Admins from '../models/Admins.js'
import bcrypt from 'bcrypt'

export default async(req, res, next)=> {
    try {
        let one = await Admins.findOne({ usuario:req.body.usuario})
        let mongo_user_password = one.contraseña
        let form_password = req.body.contraseña
        let compare = bcrypt.compareSync(form_password, mongo_user_password)
        if (compare) {
            return next()
        }
        return res.status(400).json({
            response: null, 
            message: 'El usuario o la contraseña son incorrectos!'
        })
    } catch (error) {
        return next(error)
    }
}