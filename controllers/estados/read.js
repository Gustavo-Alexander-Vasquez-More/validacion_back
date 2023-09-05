import Estados from "../../models/Estados.js";

export default async (req, res)=>{
try {
    let all= await Estados.find(req.body)

if(all){
res.status(200).json({
    response:all,
    message:"Estados encontrados con éxito"
})
}else{
    res.status(400).json({
    response:null,
    message:"Ocurrió un problema al buscar los estados"
    })
}
} catch (error) {
console.log(error);

}
}