import express from 'express';
import routerRp from './Router/RopaR.js';
import routerTc from './Router/TecnologicosR.js';
import routerC from './Router/comidaR.js';

const App = express();
const PORT = 5168;

App.use(express.json());

App.use("/api/tecnologia", routerTc);
App.use("/api/ropa", routerRp);
App.use("/api/comida", routerC)

App.get("/", (req,res)=>{
    res.json({
        mensaje: "Se ha conectado "
    })
})




App.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})