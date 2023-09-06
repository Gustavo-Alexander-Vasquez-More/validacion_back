import Clientes from "../../models/Clientes";

export default async(req, res)=>{
try {
    let create_clientes=Clientes.create(req.body)
    if(create_clientes){
    res.status(201).json({
    response:create_clientes,
    message:"Cliente creado"
    })
    }else{
    res.status(400).json({
    response:null,
    message:"ocurrio un error al crear el cliente"
    })
    }
} catch (error) {
console.log(error);
}
}