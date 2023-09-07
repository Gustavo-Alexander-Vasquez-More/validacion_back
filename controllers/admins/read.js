import Admins from "../../models/Admins.js";

export default async (req, res)=>{
try {
    let all=await Admins.find(req.body)
if(all){
res.status(201).json({
    response:all,
    message:'Admins encontrados'
})
}else{
    res.status(400).json({
    response:null,
    message:'No se encontraron los admins'
    })
}
} catch (error) {
console.log(error);
}
}