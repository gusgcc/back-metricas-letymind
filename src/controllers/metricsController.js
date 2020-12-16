ctrl = {} //controlador de rutas respecto a usuario

const METRICS = require("../models/Metric")
let variables = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']


ctrl.register = async (req, res) => {
    try {
        let data = {}
        for (let i = 0; i < variables.length; i++) {
            if (req.query[variables[i]])
                data[variables[i]] = req.query[variables[i]]
        }
        console.log(data)
        if (Object.keys(data).length > 0) {
            let newMetric = new METRICS(data)
            await newMetric.save()
        }
        res.status(200).json('oka')
    } catch (error) {
        console.log("error", error)
        res.status(500).json('error')
    }
}

module.exports = ctrl;