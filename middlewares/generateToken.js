import jwt from 'jsonwebtoken';
import Admins from '../models/Admins.js';

export default async (req, res, next) => {
  const { usuario, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const admin = await Admins.findOne({ usuario });

    // Si el usuario no existe o la contraseña no coincide
    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Generar el token solo si las credenciales son correctas
    const token = jwt.sign(
      {
        usuario: admin.usuario,
        rol: admin.rol,
      },
      process.env.SECRET_KEY,
      { expiresIn: '7d' }  // Cambiado a 1 hora por seguridad
    );

    req.token = token;  // Agregar el token al objeto req para el siguiente middleware o respuesta
    next();  // Continuar al siguiente middleware o controlador
  } catch (error) {
    console.error('Error en autenticación:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
