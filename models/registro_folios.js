import { Schema, model, Types } from 'mongoose'

let collection = 'registro_folios'
let schema = new Schema({
    usuario_admin: { type: String, required: true},
    usuario_cliente: { type: String, required: true },
    folios: { type: Number, required: true},
    fecha: { type: String, required: true},
    horario:{ type: String, required: true},
}, {
    timestamps: true
})

let Registro_folios = model(collection, schema)
export default Registro_folios