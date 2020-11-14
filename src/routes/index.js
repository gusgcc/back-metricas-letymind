
/*listado de rutas que tenemos en el sistema*/
const express = require("express")
const router = express.Router();

const metrics = require("../controllers/metricsController")
//las rutas de nuestro aplicacion web
module.exports = app => {
    //metrics
    router.post("/metrics", metrics.register)//
    //


    app.use(router) //
}