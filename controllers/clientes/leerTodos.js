import Clientes from "../../models/Clientes.js";

export default async (req, res)=>{
try {
    let all =await Clientes.find(req.body)
    .populate({
        path: 'estado_id',
        select: 'nombre'
      })
      .populate({
        path: 'author_id',
        select: 'usuario'
      })
if(all){
    res.status(200).json({
        response:all,
        message:'clientes encontrados'
    })
}else{
    res.status(400).json({
        response:null,
        message:'no se econtraron clientes'
    })
}
} catch (error) {
    
}
}