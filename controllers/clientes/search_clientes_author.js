import Clientes from "../../models/Clientes.js";
import Admins from "../../models/Admins.js";

export default async (req, res) => {
  try {
    const searchTerm = req.query.search?.trim(); // Captura el término de búsqueda
    const author = req.query.author?.trim(); // Captura el autor

    if (!searchTerm || !author) {
      return res.status(400).json({
        response: null,
        message: "Debes proporcionar un término de búsqueda y un autor.",
      });
    }

    // Buscar el ID del autor en la base de datos
    const admin = await Admins.findOne({ usuario: author });

    if (!admin) {
      return res.status(404).json({
        response: null,
        message: "El autor no existe.",
      });
    }

    // Expresión regular para coincidencias parciales (sin distinción de mayúsculas/minúsculas)
    const regex = new RegExp(searchTerm, "i");

    // Buscar clientes que coincidan con el término dentro del autor especificado
    const clients = await Clientes.find({
      author_id: admin._id, // Filtra solo clientes de este autor
      $or: [
        { nombre: { $regex: regex } }, // Coincidencia en nombre
        { folio: { $regex: regex } },  // Coincidencia en folio
      ],
    })
      .limit(5) // Máximo 5 resultados
      .populate("estado_id", "nombre") // Pobla estado_id con el nombre del estado
      .populate("author_id", "usuario"); // Pobla author_id con el usuario

    if (clients.length === 0) {
      return res.status(404).json({
        response: [],
        message: "No se encontraron clientes para este autor con ese término.",
      });
    }

    res.status(200).json({
      response: clients,
      message: "Resultados de la búsqueda",
    });

  } catch (error) {
    console.error("Error en la búsqueda:", error);
    res.status(500).json({
      response: null,
      message: "Ocurrió un error en el servidor.",
    });
  }
};
