const { Schema, model } = require("mongoose")
/*
Todo en Mongoose comienza con un esquema. Cada esquema 
se asigna a una colección MongoDB y define la forma de 
los documentos dentro de esa colección.
*/
var metricSchema = new Schema({
    date: { type: Date, default: new Date() },
    utm_source: String,
    utm_medium: String,
    utm_campaign: String,
    utm_content: String,
    utm_term: String
})
const Metric = model("Metric", metricSchema)//se creo el modelo Metric

module.exports = Metric 