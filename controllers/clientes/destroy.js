import Clientes from "../../models/Clientes.js";

export default async(req,res,next)=> {

try {
    const destroyed = await Clientes.deleteOne({ folio: req.body.folio });
        if (destroyed.deletedCount){
        res.status(200).json({ response: destroyed, message:'eliminado' })
        } 
    } catch(error) {
        next(error)
    }
}