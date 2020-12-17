const {
    Schema,
    model
} = require("mongoose")
/*
Todo en Mongoose comienza con un esquema. Cada esquema 
se asigna a una colección MongoDB y define la forma de 
los documentos dentro de esa colección.
*/
var SoftMetricSchema = new Schema({
    date: {
        type: Date,
        default: new Date()
    },
    utm_source: String,
    utm_medium: String,
    utm_campaign: String,
    utm_content: String,
    utm_term: String
})
const SoftMetric = model("SoftMetric", SoftMetricSchema) //se creo el modelo SoftMetric

module.exports = SoftMetric