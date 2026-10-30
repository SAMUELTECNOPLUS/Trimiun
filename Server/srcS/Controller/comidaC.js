import {obtnComida, obtnComidaInvNom, obtnCategoria } from "../Services/comidaS.js";

export const obtComidaController = async (req, res) => {
    try {
        const productos = await obtnComida();

        return res.status(200).json(productos);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener las comidas",
            error: error.message
        });
    }
};

export const obtComidaInvController = async (req, res) => {
    try {
        const { Nombre } = req.params;

        const productos = await obtnComidaInvNom(Nombre);

        if (!productos || productos.length === 0) {
            return res.status(404).json({
                error: "No se ha encontrado este nombre"
            });
        }

        return res.status(200).json(productos);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

export const obtnCategoriaController = async (req, res) => {

    try {
        const { Id_Categoria } = req.params;

        

        const productos = await obtnCategoria(Id_Categoria);

        if (productos.length === 0) {
            return res.status(404).json({
                mensaje: "No hay comidas en esta categoría"
            });
        }

        return res.status(200).json(productos);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};