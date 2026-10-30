import { supaBase } from "../SupaBase/supabaseConfig.js";

// OBTENER TODA LA ROPA
export const obtRopa = async () => {

    const { data, error } = await supaBase
        .from("Ropa")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

// OBTENER ROPA POR NOMBRE
export const obtRopaNombre = async (nombre) => {

    const { data, error } = await supaBase
        .from("Ropa")
        .select("*")
        .ilike("Nombre", `%${nombre.trim()}%`);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};export const obtRopaTalla = async (talla) => {

    const { data, error } = await supaBase
        .from("Ropa")
        .select(`
            ID,
            Nombre,
            Precio,

            filtroTalla:RopaYTalla!inner(
                Talla!inner(Nombre)
            ),

            RopaYTalla(
                id_Ropa,
                id_Talla,
                Stock,
                Talla(Nombre)
            )
        `)
        .ilike(
            "filtroTalla.Talla.Nombre",
            `%${talla.trim()}%`
        );

    if (error) {
        throw new Error(error.message);
    }

    return data.map((ropa) => {

        const tallas = ropa.RopaYTalla.map((item) => ({
            Nombre: item.Talla?.Nombre,
            Stock: Number(item.Stock ?? 0)
        }));

        return {
            ID: ropa.ID,
            Nombre: ropa.Nombre,
            Precio: ropa.Precio,

            CantidadTallas: new Set(
                ropa.RopaYTalla.map(item => item.id_Talla)
            ).size,

            StockTotal: tallas.reduce(
                (total, item) => total + item.Stock,
                0
            ),

            Tallas: tallas
        };
    });
};

export const obtRopaId = async (ID) => {

    const { data, error } = await supaBase
        .from("Ropa")
        .select(`
            ID,
            Nombre,
            Precio,
            RopaYTalla(
                id_Talla,
                Stock,
                Talla(Nombre)
            )
        `)
        .eq("ID", ID)
        .maybeSingle();

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        return null;
    }

    const tallas = data.RopaYTalla.map((item) => ({
        Nombre: item.Talla?.Nombre,
        Stock: Number(item.Stock ?? 0)
    }));

    return {
        ID: data.ID,
        Nombre: data.Nombre,
        Precio: data.Precio,

        CantidadTallas: new Set(
            data.RopaYTalla.map(item => item.id_Talla)
        ).size,

        StockTotal: tallas.reduce(
            (total, item) => total + item.Stock,
            0
        ),

        Tallas: tallas
    };
};