import joi from 'joi';

const loginAdmin = joi.object({
    usuario: joi.string()
        .required(),
    contraseña: joi.string()
   .required()
})

export default loginAdmin;