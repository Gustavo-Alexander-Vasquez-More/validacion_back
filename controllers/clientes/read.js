import Clientes from "../../models/Clientes.js";

export default async(req, res)=>{
try {
    const all=await Clientes.find(req.body).populate({path: 'estado_id',
    select: 'nombre'})
if(all){
res.status(201).json({
    response:all,
    message:"Clientes encontrados"
})
}else{
res.status(400).json({
    response:null,
    message:"Ocurrio un error al buscar los clientes"
})
}
} catch (error) {
    console.log(error);
}
}