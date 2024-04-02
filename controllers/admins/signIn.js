import Admins from '../../models/Admins.js';

export default async (req, res, next) => {
    try {
        // Verificar si ya hay una sesión activa para el usuario
        const existingUser = await Admins.findOne({ usuario: req.body.usuario, online: true });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Ya hay una sesión activa para este usuario'
            });
        }

        // Verificar las credenciales del usuario
        const user = await Admins.findOne({ usuario: req.body.usuario });
        if (!user || user.password !== req.body.password) {
            return res.status(400).json({
                success: false,
                message: 'El usuario o contraseña son incorrectos!.'
            });
        }

        // Actualizar el estado "en línea" del usuario al iniciar sesión
        const updatedUser = await Admins.findOneAndUpdate(
            { usuario: req.body.usuario },
            { online: true },
            { new: true }
        );

        // Eliminar la contraseña del objeto de usuario antes de devolverlo
        delete updatedUser.password;

        return res.status(200).json({
            success: true,
            message: 'Usuario logueado con éxito',
            response: {
                usuario: updatedUser.usuario,
                rol: updatedUser.rol,
                token: req.token
            }
        });
    } catch (error) {
        // Manejar errores
        return next(error);
    }
};