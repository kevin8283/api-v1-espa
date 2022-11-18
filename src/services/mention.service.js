const Mention = require("../models/mention.model")

const mentionService = {
    getAllMentions: async () => {
        try {
            const results = await Mention.find()
            return results
        } 
        catch (error) {
            return error
        }
    },

    getMentionBySigle: async (sigle) => {
        try {
            const result = await Mention.findOne({sigle: sigle.toLowerCase()})
            return result
        } 
        catch (error) {
            return error
        }
    },
    
    getMentionById: async (id) => {
        try {
            const result = await Mention.findById(id)
            return result
        } 
        catch (error) {
            return error
        }
    },

    getMentionByName: async (name) => {
        try {
            const results = await Mention.find({name: new RegExp(`/${name}/`, "iug")})
            return results
        } 
        catch (error) {
            return error
        }
    }
}

module.exports = { mentionService }