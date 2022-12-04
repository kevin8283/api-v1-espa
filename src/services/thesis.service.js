const Thesis = require("../models/thesis.model")

const thesisService = {
    addThesis: async (body) => {
        try {
            const thesis = new Thesis(body)
            const result = await thesis.save()
            return result
        } 
        catch (error) {
            return error
        }
    },

    getAllThesis: async () => {
        try {
            const results = await Thesis.find()
            return results
        } 
        catch (error) {
            return error
        }
    },

    getThesisById: async (id) => {
        try {
            const thesis = await Thesis.findById(id)
            return thesis    
        } 
        catch (error) {
            return error
        }
    }
}

module.exports = { thesisService }