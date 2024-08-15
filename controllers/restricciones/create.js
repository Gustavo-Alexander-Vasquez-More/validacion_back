import Restricciones from "../../models/Restricciones.js";
export default async(req, res)=>{
    try {
        const all= await Restricciones.create(req.body)
        if(all){
        res.status(200).json({
            response:all,
            message:'Restriccion creada'
    })
    }else{
        res.status(400).json({
            response:null,
            message:'ocurrio un error al crear la restriccion'
        })
    }
    } catch (error) {
        console.log(error);
    }
    }