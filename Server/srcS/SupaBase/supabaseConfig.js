import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const Api = process.env.VITE_SUPABASE_URL;
const Key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!Api || !Key) {
    throw new Error("Faltan las variables de entorno");
}

export const supaBase = createClient(Api, Key);