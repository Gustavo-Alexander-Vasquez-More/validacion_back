import { Schema,model } from 'mongoose'

let collection = 'restricciones'            
let schema = new Schema({           
    usuario: { type:String,required:true},
    dia_logueo:{type:Array, required:true},
    hora_logueo:{type:String, required:true},
    hora_vencimiento:{type:String, required:true}
},{
    timestamps:true
})

let Restricciones = model(collection,schema)
export default Restricciones