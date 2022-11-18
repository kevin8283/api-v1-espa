const { deliberationService } = require("../services/deliberation.service")

const deliberationController = {
    getDeliberations: async (req, res) => {
        try {
            const results = await deliberationService.getAllDeliberations()
            return res.json(results)
        } 
        catch (error) {
            return res.json(error)
        }
    },

    predictDeliberation: async (req, res) => {
        try {
            results = await deliberationService.predictDeliberation(req.body)
            return res.json(results)
        } 
        catch (error) {
            return res.json(error)    
        }
    }
}

module.exports = { deliberationController }