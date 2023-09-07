import Admins from "../models/Admins.js"

export default async function(req,res,next) {

    try{
        const usuarios = await Admins.findOne({ usuario: req.body.usuario })
        if (usuarios) {
            return res.status(400).json({
                success: false,
                message: 'Este usuario ya esta registrado!'
            })
        }
        return next()
    }
    catch(error){
        return next(error)
    }
}