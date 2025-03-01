import Clientes from "../../models/Clientes.js";
import Admins from '../../models/Admins.js';

export default async (req, res) => {
  const itemsPerPage = 5;
  let page = parseInt(req.query.page);

  // Verificar si el número de página es 0 o negativo
  if (page <= 0 || isNaN(page)) {
    return res.status(400).json({
      response: [],
      message: "Número de página no válido. Por favor, proporciona un número de página positivo."
    });
  }

  // Si la página es undefined o no es un número, se toma por defecto la página 1
  page = page || 1;

  try {
    const author = req.query.author;

    // Buscar el ID del autor basado en el nombre de usuario
    const admin = await Admins.findOne({ usuario: author });

    if (!admin) {
      return res.status(404).json({
        response: [],
        message: "No se encontró el autor con el nombre de usuario proporcionado."
      });
    }

    // Obtener clientes paginados
    const clients = await Clientes.find({ author_id: admin._id })
      .populate({ path: 'estado_id', select: 'nombre' })
      .populate({ path: 'author_id', select: 'usuario' })
      .sort({ updatedAt: -1 })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    // Obtener total de clientes para calcular totalPages
    const totalClients = await Clientes.countDocuments({ author_id: admin._id });
    const totalPages = Math.ceil(totalClients / itemsPerPage);

    res.status(200).json({
      response: clients || [],  // Si clients es null, se devuelve un array vacío
      message: clients.length > 0 ? "Clientes encontrados" : "No hay clientes disponibles",
      currentPage: page,
      prevPage: page > 1 ? page - 1 : null,
      nextPage: page < totalPages ? page + 1 : null,
      totalPages
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: [],
      message: "Ocurrió un error en el servidor"
    });
  }
};
