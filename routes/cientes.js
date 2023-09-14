import { Router } from "express";
import read from "../controllers/clientes/read.js";
import create from '../controllers/clientes/create.js'
import update from "../controllers/clientes/update.js";
import multer from "multer";
import path from "path"; // Importa el módulo "path" de Node.js

// Define una función de renombrado de archivos personalizada
const customFilename = (req, file, callback) => {
  const extension = path.extname(file.originalname); // Obtiene la extensión del archivo original
  callback(null, file.fieldname + '-' + Date.now() + extension); // Renombra el archivo con una marca de tiempo y la extensión
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/'); // Define la carpeta de destino para las cargas
  },
  filename: customFilename, // Utiliza la función de renombrado personalizada
});

const upload = multer({ storage: storage });

const clientes_router = Router();

clientes_router.get('/', read);
clientes_router.post('/create', upload.single('foto'), create);
clientes_router.put('/update/:nombre', update);

export default clientes_router;
