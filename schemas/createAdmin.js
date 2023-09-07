import joi from 'joi';

const crearAdmin = joi.object({
    usuario: joi.string()
        .required(),
    contraseña: joi.string()
    .required(),
    rol: joi.number()
    .required(),
    folios: joi.number()
    .required()
    
})

export default crearAdmin;