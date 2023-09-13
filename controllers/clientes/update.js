import Clientes from "../../models/Clientes.js";

export default async(req, res)=>{
    try {
        const nombreClient=req.params.nombre
        const updatedData=req.body
        const updated=await Clientes.findOneAndUpdate(
            { nombre:  nombreClient},
            updatedData,
            { new: true }
          );
        if(updated){
            res.status(201).json({
                response:updated,
                message:'Datos del cliente actualizados'
            })
        }else{
            res.status(400).json({
                response:null,
                message:'Datos no actualizados'
            })
        }
    } catch (error) {
        console.log(error);
    }
}