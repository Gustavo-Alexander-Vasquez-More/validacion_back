import Clientes from "../../models/Clientes.js";
import Estados from "../../models/Estados.js"; // Asegúrate de importar tu modelo de Estados
import Admins from "../../models/Admins.js";
export default async (req, res, next) => {
  try {
    let clienteData =  req.body ;
    

    // Verificar si se proporcionó el nombre del estado
    if (clienteData.estado_id) {
      const estado = await Estados.findOne({ nombre: clienteData.estado_id });

      if (!estado) {
        return res.status(400).json({
          response: null,
          message: `El estado "${clienteData.estado_id}" no existe en la base de datos.`,
        });
      }

      // Asignar el ObjectId del estado a la propiedad estado_id
      clienteData = {
        ...clienteData,
        estado_id: estado._id,
      };
    }
    if (clienteData.author_id) {
      const admin = await Admins.findOne({ usuario: clienteData.author_id });

      if (!admin) {
        return res.status(400).json({
          response: null,
          message: `El admin "${clienteData.author_id}" no existe en la base de datos.`,
        });
      }

      // Asignar el ObjectId del estado a la propiedad estado_id
      clienteData = {
        ...clienteData,
        author_id: admin._id,
      };
    }

    const all = await Clientes.create(clienteData);

    if (all) {
      await Admins.findOneAndUpdate(
        { _id: clienteData.author_id },
        { $inc: { folios: -1 } },
        { new: true }
      );
      return res.status(201).json({
        response: all,
        message: "Cliente creado exitosamente.",
      });
    } else {
      return res.status(400).json({
        response: null,
        message: "Ocurrió un error al crear el cliente.",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
