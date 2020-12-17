//para poder leer .env en dev
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
//importamos el script database
require("./database")

const express = require("express");
const config = require("./server/config");
//le pasamos el app de express() y nos devuelve un app configurado
const app = config(express());
app.set('port', process.env.PORT || 3000)
app.listen(app.get("port"), () => {
    console.log("servidor en : ", app.get("port"))
})