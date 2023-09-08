import Clientes from "../../models/Clientes.js";
import Estados from "../../models/Estados.js"; // Asegúrate de importar tu modelo de Estados

export default async (req, res, next) => {
  try {
    const photoUrl = req.file ? req.file.path : null;
    let clienteData = { ...req.body, foto: photoUrl };

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

    const all = await Clientes.create(clienteData);

    if (all) {
      const imageUrl = photoUrl ? photoUrl.replace("\\", "/") : null;
      const response = imageUrl
        ? { ...all._doc, foto: imageUrl }
        : all._doc;

      return res.status(201).json({
        response: response,
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
    return res.status(500).json({
      response: null,
      message: "Ocurrió un error interno en el servidor.",
    });
  }
};
