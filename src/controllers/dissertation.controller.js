const { dissertationService } = require("../services/dissertation.service")

const dissertationController = {
    getDissertations: async (req, res) => {
        try {
            const results = await dissertationService.getDissertations()
            return res.json(results)    
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getDissertationsByKeywords: async (req, res) => {
        try {
            const results = await dissertationService.getDissertationsByKeywords(req.body.keywords, req.body.title)
            return res.json(results)    
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getDissertationsByDomains: async (req, res) => {
        try {
            const results = await dissertationService.getDissertationsByDomains(req.body.domains, req.body.title)
            return res.json(results)    
        } 
        catch (error) {
            return res.json(error)
        }
    }
}

module.exports = { dissertationController }