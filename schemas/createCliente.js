import joi from 'joi';

const crearCliente = joi.object({
    foto: joi.any()
        .required(),
    nombre: joi.string()
    .required(),
    folio_tipo: joi.string()
    .required(),
    rfc_curp: joi.string()
    .required(),
    expedicion: joi.date()
    .required(),
    vigencia: joi.date()
    .required(),
    estado_id: joi.string()
    .required(),
})

export default crearCliente;