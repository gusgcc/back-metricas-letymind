const {
    Schema,
    model
} = require("mongoose")
/*
Todo en Mongoose comienza con un esquema. Cada esquema 
se asigna a una colección MongoDB y define la forma de 
los documentos dentro de esa colección.
*/
var ProjectRegisterSchema = new Schema({
    date: {
        type: Date,
        default: new Date()
    },
    name: String,
    whatsapp: String,
    email: String,
    asunto: String,

})
const ProjectRegister = model("ProjectRegister", ProjectRegisterSchema) //se creo el modelo ProjectRegister

module.exports = ProjectRegister