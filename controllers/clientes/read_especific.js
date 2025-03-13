import Clientes from '../../models/Clientes.js'

export default async (req, res) => {
  try {
    // Obtiene el _id de los parámetros de la URL
    const { folio } = req.params;

    const cliente = await Clientes.findOne({ folio: folio }).populate("estado_id");

    if (cliente) {
      res.status(200).json({
        response: cliente,
        message: 'cliente encontrado'
      });
    } else {
      res.status(400).json({
        response: null,
        message: 'No se encontró el cliente'
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
