import Clientes from '../Clientes.js'
import Estados from '../Estados.js'
import 'dotenv/config.js'
import '../../config/db.js'

let clientes=[
    {
    nombre: "ROGELIO ABELARDO MEDEL DIOSDADO",
    foto:"https://firebasestorage.googleapis.com/v0/b/validacion-de-licencias.appspot.com/o/010087023.jpeg?alt=media&token=11dfc2bd-7a90-43db-bb75-96f6a89292cc",
    folio_tipo:"010087023 TIPO AUTOMOVILISTA",
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
