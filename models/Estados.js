import { Schema,model } from 'mongoose'

let collection = 'estados'            
let schema = new Schema({           
    nombre: { type:String,required:true},
},{
    timestamps:true
})

let Estados = model(collection,schema)
export default Estados