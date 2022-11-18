const { mentionService } = require("../services/mention.service")

const mentionController = {
    getAllMentions: async (req, res) => {
        try {
            const results = await mentionService.getAllMentions()
            return res.json(results)
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getMentionById: async (req, res) => {
        try {
            const results = await mentionService.getMentionById(req.params.id)
            return res.json(results)
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getMentionBySigle: async (req, res) => {
        try {
            const results = await mentionService.getMentionBySigle(req.params.sigle)
            return res.json(results)
        } 
        catch (error) {
            return res.json(error)
        }
    },

    getMentionByName: async (req, res) => {
        try {
            const results = await mentionService.getMentionByName(req.body.name)
            return res.json(results)
        } 
        catch (error) {
            return res.json(error)
        }
    }
}

module.exports = { mentionController }