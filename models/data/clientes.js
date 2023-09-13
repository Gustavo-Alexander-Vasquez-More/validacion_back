import Clientes from '../Clientes.js'
import Estados from '../Estados.js'
import 'dotenv/config.js'
import '../../config/db.js'

let clientes=[
    {
    nombre: "ROGELIO ABELARDO MEDEL DIOSDADO",
    foto:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    folio:"010087023",
    tipo:'TIPO AUTOMOVILISTA',
    rfc_curp:"MEDR850413",
    estado_id:"Chiapas",
    expedicion: new Date("2021-05-13"),
    vigencia: new Date("2027-05-13")
    }
]
clientes.map(cliente=>add_estado(cliente))

async function add_estado(cliente){
console.log(cliente.estado_id);
let estados= await Estados.findOne({nombre:cliente.estado_id})
let estado_id=estados._id
cliente.estado_id=estado_id
await Clientes.create(cliente)
}
