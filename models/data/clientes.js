import Clientes from '../Clientes.js'
import Estados from '../Estados.js'
import 'dotenv/config.js'
import '../../config/db.js'

let clientes=[
    {
    nombre: "Jose Candelario Domínguez lopez",
    foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/da909c8f-7e19-4dd4-b1a9-3b6175f7710f?alt=media&token=4e95ebfc-c311-4fb6-973a-eee219df344f",
    folio:"007",
    tipo:'C',
    rfc_curp:"Fjejfjf",
    estado_id:"Aguascalientes",
    expedicion: new Date("2023-09-14"),
    vigencia: "14-09-2023"
    },
    {
        nombre: "José Miguel Aguirre Dominguez",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/dccd3d0e-263b-4864-8036-db58ec98d016?alt=media&token=5f8dec04-814b-46b2-a062-f8abca41322f",
        folio:"35786754",
        tipo:'C',
        rfc_curp:"SKGNSKFKS",
        estado_id:"Chiapas",
        expedicion: new Date("2023-09-15"),
        vigencia: "22-09-2023"
        },
        {
            nombre: "ISIDRO GUADALUPE TERRONES SALAZAR",
            foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/499399df-260f-4121-a1ab-a890857a88e5?alt=media&token=c8367ce2-835c-4b66-b2f7-f0bdb6691557",
            folio:"FD2100807231",
            tipo:'C',
            rfc_curp:"TESI770419HGTRLS05",
            estado_id:"Guanajuato",
            expedicion: new Date("2023-09-14"),
            vigencia: "14-09-2026"
            },
            {
                nombre: "MARCO ANTONIO LEON CAMARGO",
                foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/55bda4f7-54d9-407b-8748-53480a9a81af?alt=media&token=d80ac177-c768-479f-b59e-464a546073fa",
                folio:"FD2100839431",
                tipo:'A',
                rfc_curp:"LECM01924HGTNMRA9",
                estado_id:"Guanajuato",
                expedicion: new Date("2026-09-15"),
                vigencia: "15-09-2026"
                },
                {
                    nombre: "PABLO MARTIN AGUILAR ARCE",
                    foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/c8456624-d8b4-4765-8118-48933ba6f6fe?alt=media&token=89062483-0d15-49eb-a352-920b060eb92c",
                    folio:"BC20709890778",
                    tipo:'B',
                    rfc_curp:"AUAP85062HBSGRB07",
                    estado_id:"Baja California Norte",
                    expedicion: new Date("2023-09-15"),
                    vigencia: "29-06-2028"
                    },
                    {
                        nombre: "JOSE NAVARRO OCHOA",
                        foto:"https://firebasestorage.googleapis.com/v0/b/fotos-36c9a.appspot.com/o/798d7b97-5854-4325-8764-1ae37623119a?alt=media&token=5d6d12ec-663d-421b-b2af-22f754d46d91",
                        folio:"88C89635639",
                        tipo:'CHOFER',
                        rfc_curp:"NAOJ760224HMNVCS04",
                        estado_id:"Michoacán",
                        expedicion: new Date("2023-09-18"),
                        vigencia: "18-09-2032"
                        },
]
clientes.map(cliente=>add_estado(cliente))

async function add_estado(cliente){
console.log(cliente.estado_id);
let estados= await Estados.findOne({nombre:cliente.estado_id})
let estado_id=estados._id
cliente.estado_id=estado_id
await Clientes.create(cliente)
}
