// controllers/admins/verificacionToken.js
import jwt from 'jsonwebtoken';
import Admins from '../../models/Admins.js';

const verificarToken = async (req, res) => {
  try {
    // Extraer el token del header Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Token no proporcionado.' });
    }

    // Verificar el token usando la clave secreta
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Buscar al usuario en la base de datos usando el usuario del payload del token
    const usuario = await Admins.findOne({ usuario: decoded.usuario });

    if (!usuario) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }

    // Eliminar la contraseña antes de enviar la respuesta
    delete usuario.contraseña;

    // Devolver el usuario y un mensaje de éxito
    res.json({
      message: 'Token verificado con éxito.',
      usuario,
    });

  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token inválido o expirado.' });
  }
};

export default verificarToken;
