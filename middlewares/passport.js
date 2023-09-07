import Admins from "../models/Admins.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
  new Strategy(
    //defino estrategia para extraer el token le paso parametro estas propiedades:
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //propiedad "token de la solicitud" extraida de la autorizacion de encabezamiento (header) de tipo bearer
      secretOrKey: process.env.SECRET_KEY,
      //la clave secreta
    },
    async (jwt_payload, done) => {
      try {
        let usuarios = await Admins.findOne({ usuario: jwt_payload.usuario });
        if (usuarios) {
          delete usuarios.contraseña;
          return done(null, usuarios);
        } else {
          return done(null);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);