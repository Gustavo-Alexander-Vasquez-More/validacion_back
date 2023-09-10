import Admins from "../../models/Admins.js";

export default async(req, res)=>{
    try {
        const nombreAdmin=req.params.usuario
        const updatedData=req.body
        const updated=await Admins.findOneAndUpdate(
            { usuario: nombreAdmin},
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
/*dsfsdfsdfsdf*/