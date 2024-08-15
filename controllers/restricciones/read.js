import Restricciones from "../../models/Restricciones.js";
export default async (req, res)=>{
    try {
        let all= await Restricciones.find(req.body)
    
    if(all){
    res.status(200).json({
        response:all,
        message:"Restricciones de usuario encontradas."
    })
    }else{
        res.status(400).json({
        response:null,
        message:"No se encontraron restricciones para el usuario."
        })
    }
    } catch (error) {
    console.log(error);
    
    }
    }