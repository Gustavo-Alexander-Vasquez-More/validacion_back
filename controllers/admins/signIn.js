import Admins from '../../models/Admins.js';

export default async(req, res, next) => {
    try {
        let one = await Admins.findOneAndUpdate(
            { usuario: req.body.usuario },
            { online: true },
            { new: true }
        );
        if (!one) {
            return res.status(401).json({
                response:null,
                success: false,
                message: 'El usuario o contraseña son incorrectos'
            });
        }
        delete one.password;
        return res.status(200).json({
            success: true,
            message: 'Usuario logueado con exito',
            response: {
                usuario: one.usuario,
                rol: one.rol,
                token: req.token,
                folios: one.folios
            }
        });
    } catch (error) {
        return res.status(500).json({
            response:null,
            success: false,
            message: 'El usuario o contraseña son incorrectos'
        });
    }
};
