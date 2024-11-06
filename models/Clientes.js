import { Schema, model, Types } from 'mongoose'

let collection = 'clientes'
let schema = new Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    folio: { type: String, required: true },
    tipo:{type:String, required:true},
    rfc_curp: { type: String, required: true },
    expedicion: { type: Date, required: true },
    vigencia: { type: String, required: true },
    fecha_creacion: { type: String},
    estado_id: {
        type:Types.ObjectId,
        ref:'estados',
    },
    author_id: {
        type:Types.ObjectId,
        ref:'administradores',
    }
}, {
    timestamps: true
})

let Clientes = model(collection, schema)
export default Clientes