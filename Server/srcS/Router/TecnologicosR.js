import { Router } from "express"
import {obtNombreTecController, obtProductosTecController,obtProductosTecCtgController,obtProductosTecIdController,obtStockBajoTecController} from "../Controller/TecnologicosC.js";

const routerTc = Router();

routerTc.get("/",  obtProductosTecController);
routerTc.get("/stockBajo", obtStockBajoTecController);
routerTc.get("/nombre/:Nombre", obtNombreTecController);
routerTc.get("/id/:Id", obtProductosTecIdController);
routerTc.get("/categoria/:Ctg", obtProductosTecCtgController);



export default routerTc;
