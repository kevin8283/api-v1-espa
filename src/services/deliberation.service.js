const Deliberation = require("../models/deliberation.model")
const axios = require("axios")
const deliberationURI = "http://127.0.0.1:5000/api/v1/regressor/deliberation/predict"

const deliberationService = {
    getAllDeliberations: async () => {
        try {
            results = await Deliberation.find()
            return results
        } 
        catch (error) {
            return error
        }
    },

    predictDeliberation: async (deliberationDatas) => {
        try {
            const result = await axios.post(deliberationURI, deliberationDatas)
 
             return result.data 
         } 
         catch (error) {
             return error    
         }
    }
}

module.exports = { deliberationService }