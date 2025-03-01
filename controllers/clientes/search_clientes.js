import Clientes from "../../models/Clientes.js";

export default async (req, res) => {
  try {
    const searchTerm = req.query.search?.trim(); // Captura el término de búsqueda y elimina espacios extra
    
    if (!searchTerm) {
      return res.status(400).json({
        response: null,
        message: "Debes proporcionar un término de búsqueda.",
      });
    }

    // Expresión regular para búsqueda insensible a mayúsculas/minúsculas y coincidencias parciales
    const regex = new RegExp(searchTerm, "i");

    // Buscar clientes que coincidan con el término en el campo "nombre"
    const clients = await Clientes.find({
        $or: [
          { nombre: { $regex: regex } }, // Coincidencia en nombre
          { folio: { $regex: regex } }   // Coincidencia en folio
        ]
      })
      .limit(5) // Máximo 5 resultados
      .select("nombre estado_id author_id") // Selecciona solo los campos necesarios
      .populate("estado_id", "nombre") // Pobla estado_id con el nombre del estado
      .populate("author_id", "usuario"); // Pobla author_id con el usuario

    if (clients.length === 0) {
      return res.status(404).json({
        response: [],
        message: "No se encontraron clientes con ese término.",
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
