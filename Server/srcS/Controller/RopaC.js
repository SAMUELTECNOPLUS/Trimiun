import { request } from "express";
import { obtRopa, obtRopaId, obtRopaNombre, obtRopaTalla } from "../Services/RopaS.js";
import { supaBase } from "../SupaBase/supabaseConfig.js";

// OBTENER TODA LA ROPA
export const obtRopaController = async (req, res) => {
    try {

        const productos = await obtRopa();

        return res.status(200).json(productos);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });
    }
};

// OBTENER ROPA POR NOMBRE
export const obtRopaNombreController = async (req, res) => {
    try {

        const { Nombre } = req.params;

        const productos = await obtRopaNombre(Nombre);

        if (!productos || productos.length === 0) {
            return res.status(404).json({
                error: "Ningún producto encontrado"
            });
        }

        return res.status(200).json(productos);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });
    }
};


export const obtRopaTallaController = async (req, res) => {
    try {
        const { Talla } = req.params;

        const productos = await obtRopaTalla(Talla);

        if (!productos || productos.length === 0) {
            return res.status(404).json({
                error: "Ningún producto encontrado"
            });
        }

        return res.status(200).json(productos);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

export const obtRopaIdController = async(req,res) =>{
    try{
        const {ID} = req.params
        const productos = await obtRopaId(ID);

        if(productos == 0) {
            res.status(404).json({
                Error: "No se Ha encontrado este Id"
            })
        }
        return res.status(200).json(productos)
    }catch(error) {
        return res.status(500).json({
            error: error.message
        });
    }
}
