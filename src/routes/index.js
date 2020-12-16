/*listado de rutas que tenemos en el sistema*/
const express = require("express")
const router = express.Router();

const metrics = require("../controllers/metricsController")
const Project = require("../controllers/projectController")
//las rutas de nuestro aplicacion web
module.exports = app => {
    //metrics
    router.post("/metrics", metrics.register)
    //################### REFERENTE A LA DE LETMINT PROJECT##############
    //Metricas de project
    router.post("/project/metrics", Project.metrics)
    //Registro en project
    router.post("/project/register", Project.register)
    //###########################################
    app.use(router) //
}