import { supaBase } from "../SupaBase/supabaseConfig.js";


export const obtnComida = async () => {
    const {data, error} = await supaBase
        .from("Comida")
        .select("Nombre, Descripcion, Precio, ImageUrl, FechaCreacion, Categoria(Nombre)")

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export const obtnComidaInvNom = async(Nombre) => {

    const {data, error} = await supaBase
        .from("Comida")
        .select("Nombre, Precio, FechaCreacion, Inventario(stock_Actual, stock_Minimo)")
        .ilike("Nombre", `%${Nombre.trim()}%`)

    if (error) {
        throw new Error(error.message);
    }

return data;
}


export const obtnCategoria = async (Id_Categoria) => {

    const { data, error } = await supaBase
        .from("Comida")
        .select(`
            Nombre,
            Descripcion,
            Precio,
            ImageUrl,
            Id_Categoria,
            Categoria(Nombre)
        `)
        .eq("Id_Categoria", Id_Categoria);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};