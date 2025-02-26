import Admins from "../../models/Admins.js";

export default async (req, res) => {
  try {
    // Obtiene el _id de los parámetros de la URL
    const { _id } = req.params;

    // Busca el admin por su _id
    const admin = await Admins.findOne({ _id });

    if (admin) {
      res.status(200).json({
        response: admin,
        message: 'Admin encontrado'
      });
    } else {
      res.status(400).json({
        response: null,
        message: 'No se encontró el admin'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      response: null,
      message: 'Error en el servidor'
    });
  }
};
