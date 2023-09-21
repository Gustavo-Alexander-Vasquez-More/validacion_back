import Clientes from "../../models/Clientes.js";

export default async (req, res) => {
  try {
    const all = await Clientes.find(req.body)
      .populate({
        path: 'estado_id',
        select: 'nombre'
      })
      .populate({
        path: 'author_id',
        select: 'usuario'
      });

    if (all) {
      res.status(201).json({
        response: all,
        message: "Clientes encontrados"
      });
    } else {
      res.status(400).json({
        response: null,
        message: "Ocurrió un error al buscar los clientes"
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: null,
      message: "Ocurrió un error en el servidor"
    });
  }
};
