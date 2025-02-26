import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const { usuario, rol } = req.body; // Extrae usuario y rol del cuerpo de la solicitud

    if (!usuario || !rol) {
        return res.status(400).json({ error: "Usuario y rol son requeridos" });
    }

    let token = jwt.sign(
        { usuario, rol },  // Ahora el token contiene tanto usuario como rol
        process.env.SECRET_KEY, 
        { expiresIn: '7d' }  // Expira en 7 días
    );

    req.token = token;  
    next();
};
