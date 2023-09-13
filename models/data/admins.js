import Admins from '../Admins.js'
import 'dotenv/config.js'
import '../../config/db.js'

let admins=[
{
    usuario: 'hola',
    contraseña:'hola123',
    rol:0,
    online:false,
    folios:25
}
]
Admins.insertMany(admins)