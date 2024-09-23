import { Schema, model, Types } from 'mongoose'

let collection = 'registro_usuarios'
let schema = new Schema({
    usuario_admin: { type: String, required: true},
    usuario_cliente: { type: String, required: true },
    fecha: { type: String, required: true},
    horario:{ type: String, required: true},
}, {
    timestamps: true
})

let Registro_usuarios = model(collection, schema)
export default Registro_usuarios