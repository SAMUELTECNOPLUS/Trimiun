import { supaBase } from "../SupaBase/supabaseConfig.js";

export const obtProductosTec = async () => {
    const { data, error } = await supaBase
        .from("ProductosTecnologicos")
        .select("Nombre,Precio,Stock,Descripcion");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export const obtStockBajoTec = async () => {
    const { data, error } = await supaBase
        .from("ProductosTecnologicos")
        .select("*")
        .lt("Stock", 10); 
    if (error) {
        throw new Error(error.message);
    }

    return data;
}


export const obtProductosTecNombre = async(nombre) => {
    const { data,error } = await supaBase
        .from("ProductosTecnologicos")
        .select("*")
        .ilike("Nombre", `%${nombre.trim()}%`);

        if(error) {
            throw new Error(error.message);
        }

        return data;
}

export const obtProductosTecId = async(id) => {
    const {data, error} = await supaBase
    .from("ProductosTecnologicos")
    .select("*")
    .eq("ID", id)
    .maybeSingle(); 

    if(error) {
        throw new Error(error.message)
    }

    return data;
}

export const obtProductosTecCtg = async(Ctg) => {

    const {data, error} = await supaBase
    .from("ProductosTecnologicos")
    .select("*")
    .eq("Id_categoria", Ctg)

    if(error) {
        throw new Error(error.message)
    }
    return data;
}