import Admins from "../../models/Admins.js";

export default async (req, res) => {
  try {
    const { usuario } = req.params;
    const updatedData = req.body;

    // Si se está actualizando la contraseña, también establece online a false
    if (updatedData.contraseña) {
      updatedData.online = false;
    }

    const updated = await Admins.findOneAndUpdate(
      { usuario: usuario },
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
    res.status(500).json({
      response: null,
      message: 'Ocurrió un error al actualizar los datos del cliente',
    });
  }
};
