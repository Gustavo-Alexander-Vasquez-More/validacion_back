import Clientes from "../../models/Clientes.js";
import Estados from "../../models/Estados.js"; // Asegúrate de importar tu modelo de Estados

export default async (req, res) => {
  try {
    const folioClient = req.params.folio;
    const updatedData = req.body;

    // Verificar si se proporcionó el nombre del estado
    if (updatedData.estado_id) {
      const estado = await Estados.findOne({ nombre: updatedData.estado_id });

      if (!estado) {
        return res.status(400).json({
          response: null,
          message: `El estado "${updatedData.estado_id}" no existe en la base de datos.`,
        });
      }

      // Asignar el ObjectId del estado a la propiedad estado_id
      updatedData.estado_id = estado._id;
    }

    const updated = await Clientes.findOneAndUpdate(
      { folio: folioClient },
      updatedData,
      { new: true }
    );

    if (updated) {
      res.status(201).json({
        response: updated,
        message: 'Datos del cliente actualizados',
      });
    } else {
      res.status(400).json({
        response: null,
        message: 'Datos no actualizados',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
