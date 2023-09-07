import Admins from "../../models/Admins.js";

export default async (req, res, next) => {
    try {
        let one = await Admins.findOneAndUpdate(
            { usuario:req.user.usuario},
            { online:false },
            { new:true }
        )
        return res.status(200).json({
            success: one.usuario,
            message: 'usuario desconectado'
        })
    } catch (error) {
        return next(error)
    }
}