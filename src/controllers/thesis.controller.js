const { thesisService } = require("../services/thesis.service")

const thesisController = {
    addThesis: async (req, res) => {
        try {
            const thesis = await thesisService.addThesis(req.body)
            return res.json(thesis)
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getAllThesis: async (req, res) => {
        try {
            const results = await thesisService.getAllThesis()
            return res.json(results)    
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getThesisById: async (req, res) => {
        try {
            const thesis = await thesisService.getThesisById(req.params.id)
            return res.json(thesis)    
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getSamplesPerJobDomains: async (req, res) => {
        try {
            const samples = await thesisService.getSamplesPerJobDomains()
            return res.json(samples)    
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getSamplesPerThesisDomains: async (req, res) => {
        try {
            const samples = await thesisService.getSamplesPerThesisDomains()
            return res.json(samples)    
        } 
        catch (error) {
            return res.json(error)
        }
    }
}

module.exports = { thesisController }