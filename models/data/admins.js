import Admins from '../Admins.js'
import 'dotenv/config.js'
import '../../config/db.js'

let admins=[
{
    usuario: 'ElgestorMx',
    contraseña:'ElgestorMx',
    rol:'1',
    online:false,
    folios:25
}
]
Admins.insertMany(admins)