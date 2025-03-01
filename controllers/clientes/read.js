import Clientes from "../../models/Clientes.js";

export default async (req, res) => {
  const itemsPerPage = 5;
  let page = parseInt(req.query.page);

  // Verificar si el número de página es 0 o negativo
  if (page <= 0) {
    res.status(400).json({
      response: [],
      message: "Número de página no válido. Por favor, proporciona un número de página positivo."
    });
    return;
  }

  // Si la página es undefined o no es un número, se toma por defecto la página 1
  page = page || 1;

  try {
    // Contar el número total de clientes en la base de datos
    const totalClients = await Clientes.countDocuments(req.body);

    // Calcular el total de páginas
    const totalPages = Math.ceil(totalClients / itemsPerPage);

    // Si la página solicitada es mayor que el total de páginas, devolver un error
    if (page > totalPages) {
      res.status(400).json({
        response: [],
        message: "Número de página excede el total de páginas disponibles."
      });
      return;
    }

    // Buscar los clientes según la página y la paginación
    const clients = await Clientes.find(req.body)
      .populate({
        path: 'estado_id',
        select: 'nombre'
      })
      .populate({
        path: 'author_id',
        select: 'usuario'
      })
      .sort({ updatedAt: -1 })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    let prevPage = null;
    let nextPage = null;

    // Asegurar que siempre devuelva un array en response
    const response = clients.length > 0 ? clients : [];

    if (page > 1) {
      prevPage = page - 1;
    }

    if (clients.length === itemsPerPage) {
      nextPage = page + 1;
    }

    res.status(200).json({
      response,
      message: clients.length > 0 ? "Clientes encontrados" : "No se encontraron clientes",
      currentPage: page,
      prevPage,
      nextPage,
      totalPages, // Añadir totalPages
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: [],
      message: "Ocurrió un error en el servidor"
    });
  }
};
