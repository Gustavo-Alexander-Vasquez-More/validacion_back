import joi from 'joi';

const crearCliente = joi.object({
    foto: joi.any()
        .required(),
    nombre: joi.string()
    .required(),
    folio: joi.string()
    .required(),
    tipo:joi.string()
    .required(),
    rfc_curp: joi.string()
    .required(),
    expedicion: joi.date()
    .required(),
    vigencia: joi.string()
    .required(),
    estado_id: joi.string()
    .required(),
    author_id: joi.string()
    .required(),
})

export default crearCliente;