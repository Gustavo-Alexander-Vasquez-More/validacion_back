import passport from "passport";

// Middleware personalizado para verificar el token JWT
const verificarToken = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Error en la autenticación", error: err });
    }

    if (!user) {
      return res.status(401).json({ message: "Token inválido o expirado", error: info });
    }

    // Si el token es válido, agregamos el usuario a la solicitud
    req.user = user;
    next();
  })(req, res, next);
};

export default verificarToken;
