import Admins from '../../models/Admins.js'

export default async(req, res)=>{
try {
    const all= await Admins.create(req.body)
    if(all){
    res.status(200).json({
        response:all,
        message:'Admin creado con exito'
})
}else{
    res.status(400).json({
        response:null,
        message:'ocurrio un error al crear el admin'
    })
}
} catch (error) {
    console.log(error);
}
}