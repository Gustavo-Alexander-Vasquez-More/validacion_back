import { Schema, model, Types } from 'mongoose'

let collection = 'clientes'
let schema = new Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    folio_tipo: { type: String, required: true },
    rfc_curp: { type: String, required: true },
    expedicion: { type: Date, required: true },
    vigencia: { type: Date, required: true },
    estado_id: {
        type:Types.ObjectId,
        ref:'estados',
     }
}, {
    timestamps: true
})

let Clientes = model(collection, schema)
export default Clientes