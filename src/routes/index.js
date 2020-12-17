/*listado de rutas que tenemos en el sistema*/
const express = require("express")
const router = express.Router();

const metrics = require("../controllers/metricsController.js")
const Project = require("../controllers/projectController.js")
const Soft = require("../controllers/softController.js")
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
    //################### REFERENTE A LA DE LETMINT SOFT##############
    //Metricas de Soft
    router.post("/soft/metrics", Soft.metrics)
    //Registro en Soft
    router.post("/soft/register", Soft.register)
    //###########################################
    app.use(router) //
}