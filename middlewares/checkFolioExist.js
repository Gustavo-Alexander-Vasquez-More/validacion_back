import Clientes from "../models/Clientes.js";

const checkFolioExists = async (req, res, next) => {
  try {
    const { folio } = req.body;

    // Verificar si el folio ya existe en la base de datos
    const clienteExistente = await Clientes.findOne({ folio });

    if (clienteExistente) {
      return res.status(400).json({
        response: null,
        message: `El folio "${folio}" ya está registrado en la base de datos.`,
      });
    }

    next(); // Continuar con el siguiente middleware si el folio no existe
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      response: null,
      message: "Error interno del servidor al verificar el folio.",
    });
  }
};

export default checkFolioExists;
