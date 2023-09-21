import Clientes from "../../models/Clientes.js";

export default async(req, res)=>{
    try {
        const folioClient=req.params.folio
        const updatedData=req.body
        const updated=await Clientes.findOneAndUpdate(
            { folio:  folioClient},
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