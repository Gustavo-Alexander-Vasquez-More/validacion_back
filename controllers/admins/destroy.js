import Admins from "../../models/Admins.js";

export default async(req,res,next)=> {

try {
        const destroyed = await Admins.deleteOne({ usuario: req.body.usuario });
        if (destroyed.deletedCount){
        res.status(200).json({ response: destroyed, message:'eliminado' })
        } 
    } catch(error) {
        next(error)
    }
}