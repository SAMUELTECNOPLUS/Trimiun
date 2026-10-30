import { Router } from "express";
import { obtComidaController, obtComidaInvController, obtnCategoriaController } from "../Controller/comidaC.js";

const routerC = Router();

routerC.get("/", obtComidaController);
routerC.get("/nombreComida/:Nombre", obtComidaInvController);
routerC.get("/categoria/:Id_Categoria", obtnCategoriaController);



export default routerC;
