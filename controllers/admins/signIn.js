import Admins from '../../models/Admins.js'

export default async(req,res,next)=> {
    try {
        let one = await Admins.findOneAndUpdate(
            {usuario: req.body.usuario},
            {online: true},
            {new: true}
        )
        delete one.password
        return res.status(200).json({
            success:true,
            message:'Usuario logueado con exito',
            response: {
                usuario: one.usuario,
                rol:one.rol,
                token: req.token,
                folios:one.folios
}
})
} catch (error) {
return next()
}
}