import Admins from "../../models/Admins.js";

export default async(req,res,next)=> {

try {
        let destroyed = await Admins.deleteOne({ usuario: req.body.usuario });
        if (destroyed.deletedCount){
        return res.status(200).json({ response: destroyed })
        } 
    } catch(error) {
        next(error)
    }
}