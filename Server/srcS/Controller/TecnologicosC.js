    import {
        obtProductosTec,
        obtProductosTecCtg,
        obtProductosTecId,
        obtProductosTecNombre,
        obtStockBajoTec
    } from "../Services/TecnologicosS.js";

    // OBTENER TODOS LOS PRODUCTOS
    export const obtProductosTecController = async (req, res) => {
        try {
            const productos = await obtProductosTec();

            return res.status(200).json(productos);

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    };

    // OBTENER PRODUCTOS CON STOCK BAJO
    export const obtStockBajoTecController = async (req, res) => {
        try {
            const productos = await obtStockBajoTec();
            return res.status(200).json(productos);

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    };

    // OBTENER PRODUCTOS POR NOMBRE
    export const obtNombreTecController = async (req, res) => {
        try {
            const { Nombre } = req.params;

            const productos = await obtProductosTecNombre(Nombre);

            if (!productos || productos.length === 0) {
                return res.status(404).json({
                    mensaje: "Producto no encontrado"
                });
            }

            return res.status(200).json(productos);

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    };

    export const obtProductosTecIdController = async (req, res) => {
        try {
            const { Id } = req.params;

            const producto = await obtProductosTecId(Id);
                console.log(producto)
            if (!producto) {
                return res.status(404).json({
                    mensaje: "Producto no encontrado"
                });
            }

            return res.status(200).json(producto);

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    };

    export const obtProductosTecCtgController = async(req,res) => {
        try {
                const { Ctg } = req.params;

            const productos = await obtProductosTecCtg(Ctg)

            if(productos == 0) {
                res.status(404).json({
                    Error: "No se Ha encontrado La categoria"
                })
            }

        }catch(error){
        console.error(error.message)
        }
            
    }