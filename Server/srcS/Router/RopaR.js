import { Router } from "express";
import { obtRopaNombreController, obtRopaController, obtRopaTallaController, obtRopaIdController } from "../Controller/RopaC.js";

const routerRp = Router();


routerRp.get("/", obtRopaController);
routerRp.get("/nombre/:Nombre", obtRopaNombreController);
routerRp.get("/id/:ID", obtRopaIdController)
routerRp.get("/nombreTalla/:Talla", obtRopaTallaController)





export default routerRp;