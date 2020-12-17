ctrl = {} //controlador de rutas respecto a usuario

const SoftMetric = require("../models/SoftMetric")
const SoftRegister = require("../models/SoftRegister")

let variables = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']


ctrl.metrics = async (req, res) => {
    try {
        let data = {
            utm_source: req.query.utm_source ? req.query.utm_source : 'SIN_UTM',
            utm_medium: req.query.utm_medium ? req.query.utm_medium : 'SIN_UTM',
            utm_campaign: req.query.utm_campaign ? req.query.utm_campaign : 'SIN_UTM',
            utm_content: req.query.utm_content ? req.query.utm_content : 'SIN_UTM',
            utm_term: req.query.utm_term ? req.query.utm_term : 'SIN_UTM'
        }
        if (Object.keys(data).length > 0) {
            console.log(data)
            let newMetric = new SoftMetric(data)
            await newMetric.save()
        }
        res.status(200).json('oka')
    } catch (error) {
        console.log("error", error)
        res.status(500).json('error')
    }
}

ctrl.register = async (req, res) => {
    try {
        console.log(req)
        let aux = {
            name: req.body.name,
            whatsapp: req.body.whatsapp,
            email: req.body.email,
            asunto: req.body.asunto
        }
        console.log("guardar en bd", aux)
        if (Object.keys(aux).length > 0) {
            let newProjectRegister = new SoftRegister(aux)
            await newProjectRegister.save()
        }
        res.status(200).json('oka')
    } catch (error) {
        console.log("error", error)
        res.status(500).json('error')
    }
}

module.exports = ctrl;